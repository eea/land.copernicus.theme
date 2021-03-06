# Make sure to: pip install twine
# https://github.com/pypa/twine

PACKAGE=land.copernicus.theme

VERSION=$(shell cat land/copernicus/theme/version.txt)

all:

build:
	python2 setup.py bdist_wheel
	python2 setup.py bdist_egg

release: build
	twine upload ./dist/${PACKAGE}-${VERSION}-*.whl
	twine upload ./dist/${PACKAGE}-${VERSION}-*.egg

clean:
	rm -rf build/ dist/
