# Command history

## Project structure

0. ng new
```bash
ng new heroes-web-dashboard --directory=./ --skip-git
? add Angular routing: yes
? stylesheet: css
```

1. Auth
```bash
ng g m auth --routing
```

2. Heroes
```bash
ng g m heroes --routing
```

3. Shared
```bash
ng g m shared
```

4. Material
```bash
ng g m material
```

5. auth/ui-pages
```bash
ng g c auth/ui-pages/layoutPage --inline-style --skip-tests

ng g c auth/ui-pages/loginPage --inline-style --skip-tests

#signin
ng g c auth/ui-pages/registerPage --inline-style --skip-tests
```

6. heroes/ui-pages
```bash
ng g c heroes/ui-pages/heroPage --inline-style --skip-tests

ng g c heroes/ui-pages/layoutPage --inline-style --skip-tests

ng g c heroes/ui-pages/listPage --inline-style --skip-tests

ng g c heroes/ui-pages/newPage --inline-style --skip-tests

ng g c heroes/ui-pages/searchPage --inline-style --skip-tests
```

7. shared/ui-pages
```bash
ng g c shared/ui-pages/Error404Page --inline-style --skip-tests
```