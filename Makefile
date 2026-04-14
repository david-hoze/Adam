.PHONY: build run-mock run-tui export clean

# Idris2 native binary
build:
	cd eden-idris && ./build.sh

# Run (mock backend, no API key needed)
run-mock:
	cd eden-idris && ./build/exec/eden.exe --repl --backend mock

# TUI with Claude backend
run-tui:
	cd eden-idris && ./build/exec/eden.exe --tui --backend claude

# Export
export:
	cd eden-idris && ./build/exec/eden.exe --export

# Clean build artifacts
clean:
	rm -rf eden-idris/build/
