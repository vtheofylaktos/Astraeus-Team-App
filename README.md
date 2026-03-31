# Astraeus Team App

Εφαρμογή διαχείρισης αποστολών για την περιοχή του Βοΐου.

---

## 📱 Πώς να κατεβάσεις την εφαρμογή στο κινητό σου (Android)

Κάθε φορά που γίνεται push στο branch `main`, το GitHub Actions χτίζει αυτόματα ένα `.apk` αρχείο που μπορείς να εγκαταστήσεις στο Android κινητό σου. **Δεν χρειάζεται Play Store, EAS CLI, ή Expo λογαριασμός.**

### Βήμα 1 – Ενεργοποίησε το build (μόνο την πρώτη φορά)

> ℹ️ Τα builds τρέχουν **αυτόματα** με κάθε push στο `main`. Αν το repo είναι φρέσκο ή θες να τρέξεις χειροκίνητα:

1. Πήγαινε στη σελίδα του repository στο GitHub: `https://github.com/vtheofylaktos/Astraeus-Team-App`
2. Κλίκαρε στο **Actions** tab (πάνω μενού)
3. Επίλεξε το workflow **"Android APK Build"** στα αριστερά
4. Κλίκαρε **"Run workflow"** (δεξιά) → βεβαιώσου ότι το Branch είναι **`main`** → **"Run workflow"**

### Βήμα 2 – Κατέβασε το APK

Αφού ολοκληρωθεί επιτυχώς το build (πράσινο ✅, ~5-10 λεπτά):

1. Κλίκαρε στο run που ολοκληρώθηκε
2. Κάτω στην ενότητα **Artifacts**, κλίκαρε στο **`app-debug`**
3. Κατεβαίνει ένα `.zip` αρχείο — άνοιξέ το και βρες το αρχείο `.apk`

### Βήμα 3 – Εγκατάσταση στο Android

1. Στείλε το `.apk` αρχείο στο κινητό σου (π.χ. Google Drive, email, USB)
2. Άνοιξε το αρχείο από το κινητό σου
3. Αν σου ζητηθεί, **ενεργοποίησε την εγκατάσταση από άγνωστες πηγές**:
   - **Android 8+**: Ρυθμίσεις → Εφαρμογές → Το app του browser/αρχειοθέτη σου → Να επιτρέπεται εγκατάσταση από άγνωστες πηγές
   - **Παλαιότερες εκδόσεις**: Ρυθμίσεις → Ασφάλεια → Άγνωστες πηγές → Ενεργοποίηση
4. Ακολούθησε τα βήματα εγκατάστασης και άνοιξε την εφαρμογή

> ⚠️ **Σημείωση:** Το APK αυτό είναι debug build και προορίζεται για δοκιμές. Δεν απαιτείται Play Store.

---

## 🚀 Τοπική Εκτέλεση (Development)

```bash
npm install
npx expo start
```

Σάρωσε το QR code με την εφαρμογή **Expo Go** από το Play Store/App Store για να δεις την εφαρμογή στο κινητό σου χωρίς να χρειαστεί εγκατάσταση APK.

---

## How to Download the App to Your Phone (English)

Every push to `main` triggers a GitHub Actions workflow that builds a `.apk` file you can install on any Android device. **No Play Store, EAS CLI, or Expo account required.**

### Step 1 – Trigger a build

Builds run automatically on every push to `main`. To trigger manually:
1. Go to the **Actions** tab in this repository
2. Select the **"Android APK Build"** workflow on the left
3. Click **"Run workflow"** (top right) → make sure Branch is **`main`** → **"Run workflow"**

### Step 2 – Download the APK

Once the build succeeds (green ✅, ~5-10 minutes):
1. Click the completed run
2. Under **Artifacts**, click **`app-debug`**
3. A `.zip` file downloads — extract it to get the `.apk` file

### Step 3 – Install on Android

1. Transfer the `.apk` to your phone (Google Drive, email, USB, etc.)
2. Open the file on your phone
3. If prompted, **allow installation from unknown sources**:
   - **Android 8+**: Settings → Apps → Your browser/file manager → Allow from this source
   - **Older versions**: Settings → Security → Unknown Sources → Enable
4. Follow the installation steps and open the app

> ⚠️ **Note:** This is a debug APK intended for testing. No Play Store required.

---

## Quick Dev Setup

```bash
npm install
npx expo start   # scan QR code with Expo Go app
```
