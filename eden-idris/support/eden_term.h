#ifndef EDEN_TERM_H
#define EDEN_TERM_H

/* Low-level terminal I/O */
int eden_term_init(void);
void eden_term_cleanup(void);
int eden_term_width(void);
int eden_term_height(void);
int eden_term_read_key(int timeout_ms);
void eden_term_write(char *s);
void eden_term_flush(void);

/* Cell-buffer screen compositor */
void eden_screen_init(int w, int h);
void eden_screen_set(int row, int col, int ch,
                     int fr, int fg, int fb,
                     int br, int bg, int bb,
                     int bold);
void eden_screen_clear(void);
void eden_screen_present(void);

#endif
