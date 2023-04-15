# LFC DustJS Helpers

This package provides a collection of DustJS helpers.

- dustjs-helpers: https://github.com/linkedin/dustjs-helpers
- common-dustjs-helpers: https://github.com/rodw/common-dustjs-helpers
- custom helpers (see below)

This package is intended to be used with Node as well as Browser.

## Custom helpers

### `@resolveurl`

If context is
```
{url: "/some/file.html"}
```
then
```
{@resolveurl base="http://web.site/index.html" target=url/}
```
outputs
```
http://web.site/some/file.html
```

### `@year`

```
{@year/}
```
outputs
```
2020
```
