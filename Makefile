DIST=dist
SRC=src
WEBPACK=npx webpack

target_default: dev

all: clean dist

dev:
	@-$(WEBPACK) -w

dist:
	@-$(WEBPACK)

clean:
	@-rm -rf $(DIST) $(SRC)/*.d.ts

clear: clean
	@-rm -rf node_modules package-lock.json