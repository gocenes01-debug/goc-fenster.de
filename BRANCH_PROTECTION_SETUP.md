# Branch Protection & PR Workflow Setup — Göc Fenster

**Status:** Ready for Implementation  
**Effort:** 30-45 minutes (one-time setup)  
**Impact:** Prevents broken code on main branch, enforces code review

---

## Why Branch Protection?

**Current Situation (❌ risky):**
```
Any developer can push directly to main
  ↓
Broken code goes live immediately
  ↓
Users see broken website
  ↓
Revenue loss
```

**With Branch Protection (✅ safe):**
```
Developer creates feature branch
  ↓
Opens Pull Request
  ↓
Automated tests run (Hugo build, link check, etc.)
  ↓
Code review required
  ↓
Merge only if all checks pass
  ↓
Clean, tested code only on main
```

---

## Step 1: Enable Branch Protection

### In GitHub Repository Settings:

1. Go to: **Repository** → **Settings** → **Branches**
2. Under "Branch protection rules" → **Add rule**

### Rule Name:
```
Pattern: main
(protects the main branch)
```

### Protection Settings:

#### A. Require status checks to pass:
```
✅ Require branches to be up to date before merging
✅ Require status checks to pass before merging
   ├─ GitHub Pages build (automatic)
   └─ (Add custom checks here: Hugo build, Link checker, etc.)
```

#### B. Require pull request reviews:
```
✅ Require pull request reviews before merging
   └─ Number of approvals: 1
✅ Require review from Code Owners (optional)
```

#### C. Require conversation resolution:
```
✅ Require all conversations on code to be resolved before merging
```

#### D. Require status checks:
```
✅ Require branches to be up to date before merging
```

#### E. Restrict who can push:
```
✅ Restrict who can push to matching branches
   └─ Allow: [select team members only]
```

### Final Settings:
```
Save Branch Protection Rule
```

---

## Step 2: Create PR Template

**File:** `.github/pull_request_template.md`

Creates automatic checklist when opening PRs.

```markdown
## Description
<!-- What changes are made? -->
Brief description of the PR.

## Type of Change
- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 📝 Documentation
- [ ] ♻️ Refactoring
- [ ] 🎨 Design/CSS
- [ ] 📊 Content update
- [ ] 🔧 Configuration

## Changes Made
- [ ] Summarize changes clearly
- [ ] Link any related issues (#123)

## Testing
- [ ] Tested locally: `hugo server`
- [ ] All links working
- [ ] Mobile responsive
- [ ] No console errors (F12)

## Checklist
- [ ] Follow coding style (comments, naming)
- [ ] Documentation updated
- [ ] No breaking changes
- [ ] Content is spell-checked (German)
- [ ] SEO tags reviewed (meta, keywords)

## Screenshots (if UI change)
<!-- Paste or drag images here -->

## Additional Notes
Any other relevant information.
```

---

## Step 3: Create CONTRIBUTING.md

**File:** `CONTRIBUTING.md`

Guidelines for contributors.

```markdown
# Beitragen zu Göc Fenster Website

Danke für dein Interesse, zur Website beizutragen!

## Development Workflow

### 1. Feature Branch erstellen
```bash
git checkout -b feature/description-of-feature
```

**Branch Namen Convention:**
- `feature/new-feature-name` — Neue Features
- `fix/bug-description` — Bug Fixes  
- `docs/update-documentation` — Dokumentation
- `style/update-css` — Design/CSS Änderungen

### 2. Lokale Änderungen machen

```bash
# Hugo Server starten
hugo server

# Browser öffnen: http://localhost:1313
# Änderungen werden live angezeigt
```

### 3. Commits machen

```bash
git add .
git commit -m "feat: Description of change"
```

**Commit Message Convention:**
- `feat: ` — Neue Features
- `fix: ` — Bug Fixes
- `docs: ` — Dokumentation
- `style: ` — Design/CSS
- `refactor: ` — Code-Umstrukturierung
- `test: ` — Tests

### 4. Push und Pull Request

```bash
git push origin feature/description-of-feature
```

Dann im GitHub UI:
- "Create Pull Request" klicken
- Template ausfüllen
- Abwarten auf Code Review

### 5. Code Review

Der Maintainer wird:
- ✅ Tests überprüfen
- ✅ Code-Qualität checken
- ✅ Feedback geben (falls nötig)

Bei Feedback:
```bash
# Änderungen lokal machen
git add .
git commit -m "fix: Address feedback from review"
git push origin feature/...
```

Pull Request wird automatisch aktualisiert.

### 6. Merge

Nach Genehmigung wird der PR gemergt:
- Branch automatisch gelöscht
- Live auf Produktion deployed

## Regeln

### ✅ Bitte mache:
- [ ] Hugo lokal testen vor Push
- [ ] `hugo` command laufen um Fehler zu checken
- [ ] Neue Features dokumentieren
- [ ] Fokussierte, kleine PRs (nicht 10 Änderungen auf einmal)
- [ ] English oder German? (Konsistenz halten)

### ❌ Bitte nicht:
- ❌ Direkt auf main pushen (wird abgelehnt)
- ❌ Alte Fensterbilder löschen (archivieren stattdessen)
- ❌ Kundendaten/Passwörter committen
- ❌ Große Dateien ohne Kompression
- ❌ Merge ohne Review/Tests

## Hilfreiche Commands

```bash
# Status überprüfen
git status

# Lokale Änderungen sehen
git diff

# Hugo build überprüfen
hugo

# Link-Checker lokal
npm install -g broken-link-checker
hugo && blc "file://$(pwd)/public" --recursive

# Letzten Commit ändern (noch nicht gepusht)
git commit --amend

# Branch wechseln
git checkout main
git checkout feature/my-feature
```

## Questions?

Frag im Team oder stelle Issues:
- GitHub Issues: `https://github.com/gocenes01-debug/goc-fenster.de/issues`
- Team: Göc Fenster Rheinfelden

---

**Danke für deinen Beitrag! 🙏**
```

---

## Step 4: Create Issue Templates

Optional aber hilfreich: Vordefinierte Issue-Templates.

### Create: `.github/ISSUE_TEMPLATE/bug_report.md`

```markdown
---
name: Bug Report
about: Report a problem
title: "[BUG] "
labels: bug
---

## Description
Describe the bug clearly.

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen?

## Actual Behavior
What actually happens?

## Screenshots
[If applicable]

## Environment
- Browser: [e.g., Chrome, Firefox]
- Device: [Desktop, Mobile]
- Page: [URL where bug occurs]

## Additional Context
Any other info?
```

### Create: `.github/ISSUE_TEMPLATE/feature_request.md`

```markdown
---
name: Feature Request
about: Suggest an idea
title: "[FEATURE] "
labels: enhancement
---

## Description
Clear description of the feature.

## Motivation
Why is this needed? What problem does it solve?

## Proposed Solution
How should this work?

## Alternative Solutions
Other approaches considered?

## Additional Context
Screenshots, examples, links?
```

---

## Step 5: Protect main Branch in Code

### Add to `.github/workflows/deploy.yml`:

```yaml
# Prevent accidental pushes to main (optional but recommended)
on:
  push:
    branches:
      - main

jobs:
  protect:
    runs-on: ubuntu-latest
    steps:
      - name: Protect main branch
        run: |
          echo "Main branch is protected. All changes must go through PR."
          echo "Create feature branch instead:"
          echo "  git checkout -b feature/your-feature-name"
```

---

## Step 6: GitHub Actions for PRs

### Add to `.github/workflows/pr-checks.yml`:

```yaml
name: PR Checks

on:
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Check Hugo Build
        run: |
          hugo version
          hugo --minify
          
      - name: Check for broken links
        run: |
          npm install -g broken-link-checker
          blc "file://$(pwd)/public" --recursive || true
          
      - name: Check HTML validity
        run: |
          npm install -g html-validate
          html-validate "public/**/*.html" || true
```

---

## Step 7: Team Communication

### Inform team:

Send message to development team:

```
Subject: GitHub Workflow Update — Branch Protection Enabled

Hey team,

Starting today, direct pushes to main are blocked for safety.

New Workflow:
1. Create feature branch: git checkout -b feature/name
2. Make changes locally: hugo server (test!)
3. Commit: git commit -m "feat: description"
4. Push: git push origin feature/name
5. Create Pull Request on GitHub
6. Wait for checks/review
7. Merge when approved

Questions?
- Check CONTRIBUTING.md
- Ask in chat
- See PR template for details

Danke! 🙌
```

---

## Workflow Diagram

```
Developer                GitHub              Deployment
    │
    ├─→ Create branch     │
    │   feature/X         │
    │                     │
    ├─→ Make changes      │
    │   hugo server       │
    │   (test locally)    │
    │                     │
    ├─→ Commit & Push     ├─→ Create PR
    │   git push          │   (template filled)
    │                     │
    │                     ├─→ Run Checks
    │                     │   ✓ Hugo build
    │                     │   ✓ Links valid
    │                     │   ✓ HTML valid
    │                     │   ✓ No secrets
    │                     │
    │                     ├─→ Request Review
    │                     │   (1 approval required)
    │                     │
    ├─← Review feedback   │
    │   (if changes need) │
    │                     │
    ├─→ Fix issues        ├─→ Update PR
    │   git commit/push   │   (auto-updated)
    │                     │
    │                     ├─→ Approve ✅
    │                     │
    │                     ├─→ Merge to main
    │                     │
    │                     │
    │                     │                  ├─→ Deploy GitHub Pages
    │                     │                  │   (automatic)
    │                     │                  │
    │                     │                  ├─→ Build & Test
    │                     │                  │
    │                     │                  ├─→ Live on
    │                     │                  │   goc-fenster.de ✅
```

---

## Step 8: Testing Branch Protection

### Verify protection is working:

**Test 1: Try direct push to main**
```bash
git checkout main
echo "test" >> test.txt
git add test.txt
git commit -m "test"
git push origin main

# Expected: ❌ REJECTED
# Error: "Protected branch rule violation"
```

**Test 2: Test PR workflow**
```bash
git checkout main
git pull
git checkout -b feature/test-pr
echo "test" >> test.txt
git add test.txt
git commit -m "feat: test PR workflow"
git push origin feature/test-pr

# Go to GitHub UI
# Click "Create Pull Request"
# See checks run
# ✅ All checks pass
# Get review approval
# Click "Merge"
```

---

## Implementation Checklist

### Week 1 (Setup):
- [ ] GitHub Settings → Branches → Add rule for "main"
- [ ] Configure protection settings (status checks, reviews)
- [ ] Create `.github/pull_request_template.md`
- [ ] Create `CONTRIBUTING.md`
- [ ] Create issue templates (bug, feature)

### Week 2 (Testing):
- [ ] Test PR workflow (create → check → approve → merge)
- [ ] Verify protection blocks direct pushes
- [ ] Send team communication
- [ ] Document in wiki/README

### Ongoing:
- [ ] All PRs follow template
- [ ] Reviews happen within 24h
- [ ] Merges only via PR (no exceptions!)

---

## Best Practices

### ✅ DO:
- **Small PRs:** 1-3 commits, 1-2 files (easier review)
- **Clear titles:** "feat: Add blog section" (not "updates")
- **Link issues:** "Fixes #123" in PR body
- **Wait for checks:** All green ✅ before merge
- **Approve after review:** Don't auto-merge

### ❌ DON'T:
- **Big PRs:** 10+ files, 20+ commits (hard to review)
- **Vague titles:** "fix stuff", "updates" (meaningless)
- **Push and merge:** Always use PR
- **Merge broken tests:** Wait for green checks
- **Force push:** After PR created (rewrites history)

---

## Troubleshooting

### PR blocked: "This branch has 1 failing check"

**Solution:** Go to the PR checks tab, see what failed:
- Hugo build error? → Fix locally, push new commit
- Link broken? → Fix the link, push again
- Linting issue? → Follow style guide

### "Can't merge: Branch out of date"

**Solution:** Update branch with main:
```bash
git fetch origin
git merge origin/main
git push origin feature/...
```

### "Can't delete branch" after merge

**Solution:** GitHub auto-deletes, or click "Delete branch" button

---

## GitHub Settings Reference

| Setting | Value | Why |
|---------|-------|-----|
| Require branches up to date | ✅ | Prevents merge conflicts |
| Require status checks | ✅ | Ensures tests pass |
| Require reviews | ✅ (1) | Human review for quality |
| Require conversation resolution | ✅ | All feedback addressed |
| Require code owner review | ❌ | (Optional, for large teams) |
| Allow auto-merge | ❌ | Manual control preferred |
| Allow force push | ❌ | Prevents history rewrite |
| Dismiss stale reviews | ❌ | Reviews stay valid |

---

## Summary

**What changed:**
- Direct pushes to main now **blocked**
- All changes must use **Pull Requests**
- Automated **tests run** on every PR
- **Code review required** (1 approval)
- Clean, tested code only on main

**Team impact:**
- ⏱️ Slightly slower (PR approval takes time)
- 🛡️ Much safer (no broken deploys)
- 💡 Better quality (code review)
- 📚 Better documentation (PR comments)

**Time invested:** 30-45 min one-time setup
**Benefit:** Prevents broken code, enforces quality

---

**Questions?** Contact Göc Fenster Rheinfelden
📞 07623 9995
