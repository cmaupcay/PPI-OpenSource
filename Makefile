PUBLIC=public
SRC=src
TSC=tsc
WEBPACK=npx webpack

target_default: all

all: clean dev

dev:
	@-$(WEBPACK) -w

dist:
	@-$(WEBPACK)

clean:
	@-rm -rf $(PUBLIC)/*.js $(PUBLIC)/*.map

clear: clean
	@-rm -rf node_modules package-lock.json