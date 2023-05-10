DIST=dist
SRC=src
WEBPACK=npx webpack
PANDOC=pandoc
PDF_SRC=$(SRC)/textes/introduction.md $(SRC)/textes/utiliser.md $(SRC)/textes/contribuer.md $(SRC)/textes/entreprendre.md $(SRC)/textes/conclusion.md $(SRC)/textes/ressources.md
PDF_DIST=$(SRC)/ppi.pdf

target_default: all

all: clean dist

pdf:
	@-echo Exportation du texte en PDF... && $(PANDOC) -o $(PDF_DIST) $(PDF_SRC)

dev: pdf
	@-$(WEBPACK) -w

dist: pdf
	@-echo Empaquetage du code source... && $(WEBPACK)

clean.pdf:
	@-rm -rf $(PDF_DIST)

clean: clean.pdf
	@-rm -rf $(DIST) $(SRC)/*.d.ts

clear: clean
	@-rm -rf node_modules package-lock.json

install.vercel:
	@-yum install wget
	@-mkdir pandoc
	@-wget -qO- https://github.com/jgm/pandoc/releases/download/2.11.1.1/pandoc-2.11.1.1-linux-amd64.tar.gz | tar xvzf - --strip-components 1 -C ./pandoc
	@-export PATH="./pandoc/bin:$PATH"
	@-yarn install

install.npm:
	@-npm install

install: install.npm