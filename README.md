# মুহূর্ত

> A(nother) library for date-time manipulation

![GitHub top language](https://img.shields.io/github/languages/top/maacpiash/muhurto-js.svg?logo=typescript&style=flat-square)
[![License](https://img.shields.io/github/license/maacpiash/muhurto-js.svg?logo=open-source-initiative&style=flat-square)](https://github.com/maacpiash/muhurto-js/blob/master/LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?logo=github&style=flat-square)](https://github.com/maacpiash/muhurto-js/compare)


## But why?

- I think there are some things *weird* with how the Javascript/Node.js `Date` is implemented: sometimes inconsistencies result in *gotcha* moments.
    - e.g., `getMonth()` starts from `0`, which is not how humans write dates, whereas `getDate()` starts from `1`, which is how humans do write dates.
- I'm tired of writing accessor method names instead of property names (which are usually shorter) for getting/setting properties for simple tasks.
    - e.g., `birthday.setDate(birthday.getDate() + 1)` instead of `birthday.date += 1`
        - Is it too obvious that I come from the C#/.NET side? 🤔
- I find some date-manipulation libraries are too bloated and/or do not cut it for my purposes.
    - I think examples are not necessary!

## ⚠️ Under construction! ⚠️
