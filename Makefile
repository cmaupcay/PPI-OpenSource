DIST=dist
SRC=src
WEBPACK=npx webpack
PANDOC=pandoc
PDF_SRC=$(SRC)/textes/*.md
PDF_DIST=$(SRC)/ppi.pdf

target_default: all

all: clean pdf dist

pdf:
	@-echo Exportation du texte en PDF... && $(PANDOC) -o $(PDF_DIST) $(PDF_SRC)

dev: pdf
	@-$(WEBPACK) -w

dist:
	@-echo Empaquetage du code source... && $(WEBPACK)

clean.pdf:
	@-rm -rf $(PDF_DIST)

clean: clean.pdf
	@-rm -rf $(DIST) $(SRC)/*.d.ts

clear: clean
	@-rm -rf node_modules package-lock.json

install:
	@-npm install