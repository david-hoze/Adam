||| Semantic relation extraction from text.
|||
||| Detects structural relationships between concepts:
||| authorship, influence, support, contradiction, derivation.
||| These become typed edges in the graph.
module Eden.SemanticRelations

import Data.List
import Data.List1
import Data.String
import Eden.Types

%default total

------------------------------------------------------------------------
-- Relation patterns
------------------------------------------------------------------------

||| A detected relation between two concept references.
public export
record RelationCandidate where
  constructor MkRelationCandidate
  rcSrcLabel : String
  rcDstLabel : String
  rcEdgeType : EdgeType
  rcWeight   : Double
  rcEvidence : String

------------------------------------------------------------------------
-- Pattern matching for relation types
------------------------------------------------------------------------

||| Authorship indicators: "X wrote Y", "X by Y", "X's Y".
public export
authorPatterns : List String
authorPatterns =
  [ "wrote", "authored", "created", "by", "designed"
  , "invented", "developed", "formulated", "proposed" ]

||| Influence indicators: "X influenced Y", "X shaped Y".
public export
influencePatterns : List String
influencePatterns =
  [ "influenced", "shaped", "inspired", "led to", "caused"
  , "motivated", "drove", "sparked", "prompted" ]

||| Support indicators: "X supports Y", "X reinforces Y".
public export
supportPatterns : List String
supportPatterns =
  [ "supports", "reinforces", "confirms", "validates"
  , "strengthens", "bolsters", "underpins", "corroborates" ]

||| Contradiction indicators: "X contradicts Y", "X conflicts with Y".
public export
contradictionPatterns : List String
contradictionPatterns =
  [ "contradicts", "conflicts", "opposes", "challenges"
  , "undermines", "refutes", "negates", "disputes" ]

||| Derivation indicators: "X derived from Y", "X based on Y".
public export
derivationPatterns : List String
derivationPatterns =
  [ "derived from", "based on", "built on", "extends"
  , "follows from", "rooted in", "grounded in" ]

------------------------------------------------------------------------
-- Entity type inference
------------------------------------------------------------------------

||| Infer whether a concept label refers to a person, work, or abstract.
public export
data EntityType = PersonEntity | WorkEntity | AbstractEntity

public export
Show EntityType where
  show PersonEntity   = "person"
  show WorkEntity     = "work"
  show AbstractEntity = "abstract"

||| Person indicators: capitalized single words, known name patterns.
public export
personIndicators : List String
personIndicators =
  [ "einstein", "aristotle", "plato", "socrates", "kant"
  , "hume", "descartes", "newton", "darwin", "turing"
  , "wittgenstein", "popper", "kuhn", "chomsky" ]

||| Work indicators: quoted titles, known work patterns.
public export
workIndicators : List String
workIndicators =
  [ "republic", "principia", "critique", "tractatus"
  , "origin", "manifesto", "discourse", "meditations" ]

||| Infer entity type from a label.
public export
inferEntityType : String -> EntityType
inferEntityType label =
  let lower = toLower label
  in if any (\p => isInfixOf p lower) personIndicators
       then PersonEntity
     else if any (\p => isInfixOf p lower) workIndicators
       then WorkEntity
     else AbstractEntity

------------------------------------------------------------------------
-- Relation extraction
------------------------------------------------------------------------

||| Check if text contains any of the given patterns.
hasPattern : String -> List String -> Bool
hasPattern text patterns =
  let lower = toLower text
  in any (\p => isInfixOf p lower) patterns

||| Select edge type based on patterns found in context text.
public export
classifyRelation : String -> Maybe EdgeType
classifyRelation context =
  if hasPattern context authorPatterns then Just AuthorOf
  else if hasPattern context influencePatterns then Just Influences
  else if hasPattern context supportPatterns then Just Supports
  else if hasPattern context contradictionPatterns then Just ContradictsEdge
  else if hasPattern context derivationPatterns then Just DerivedFrom
  else Nothing

||| Extract relation candidates from text given known concept labels.
||| For each pair of concepts that co-occur within a sentence,
||| checks for relational language between them.
public export
extractRelations : String -> List String -> List RelationCandidate
extractRelations text labels =
  let sentences = splitSentences text
      pairs     = allLabelPairs labels
  in concatMap (checkPair sentences) pairs
  where
    splitSentences : String -> List String
    splitSentences s = map trim (forget (split (\c => c == '.' || c == '!' || c == '?') s))

    allLabelPairs : List String -> List (String, String)
    allLabelPairs [] = []
    allLabelPairs (x :: xs) = map (\y => (x, y)) xs ++ allLabelPairs xs

    checkPair : List String -> (String, String) -> List RelationCandidate
    checkPair sents (a, b) =
      let lower_a = toLower a
          lower_b = toLower b
          relevant = filter (\s => isInfixOf lower_a (toLower s)
                                && isInfixOf lower_b (toLower s)) sents
      in mapMaybe (\s => case classifyRelation s of
                           Just et => Just (MkRelationCandidate a b et 0.5 s)
                           Nothing => Nothing) relevant

------------------------------------------------------------------------
-- Relation scoring
------------------------------------------------------------------------

||| Score a relation candidate based on evidence quality.
||| Higher confidence for explicit relational language, lower for
||| mere co-occurrence.
public export
scoreRelation : RelationCandidate -> Double
scoreRelation rc =
  let baseWeight = rc.rcWeight
      typeBoost  = case rc.rcEdgeType of
                     AuthorOf        => 0.3
                     Influences      => 0.2
                     Supports        => 0.15
                     ContradictsEdge => 0.25
                     DerivedFrom     => 0.2
                     _               => 0.0
  in min 1.0 (baseWeight + typeBoost)
