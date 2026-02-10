# دليل رفع Portfolio على GitHub Pages 🚀

## الخطوات المطلوبة

### 1️⃣ تحديث المعلومات الشخصية

قبل الرفع، يجب تحديث الملفات التالية:

#### في `package.json`:
```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```
**مثال:** إذا كان اسم المستخدم `yaserhasan` واسم المشروع `portfolio`:
```json
"homepage": "https://yaserhasan.github.io/portfolio"
```

#### في `vite.config.ts`:
```typescript
base: process.env.NODE_ENV === 'production' ? '/YOUR_REPO_NAME/' : '/',
```
**مثال:**
```typescript
base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
```

---

### 2️⃣ إنشاء Repository على GitHub

1. اذهب إلى [GitHub](https://github.com/new)
2. أنشئ repository جديد باسم مثل `portfolio` أو `yaser-portfolio`
3. **لا تُضف** README أو .gitignore أو license (سنضيفهم لاحقاً)

---

### 3️⃣ رفع المشروع على GitHub

في terminal، نفذ الأوامر التالية:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio project"

# Add remote (غيّر YOUR_USERNAME و YOUR_REPO)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to main branch
git branch -M main
git push -u origin main
```

---

### 4️⃣ تثبيت المكتبات ونشر الموقع

```bash
# تثبيت جميع المكتبات المطلوبة
npm install

# بناء المشروع ونشره على GitHub Pages
npm run deploy
```

**ملاحظة:** الأمر `npm run deploy` سيقوم بـ:
- تشغيل `npm run build` تلقائياً (بناء المشروع)
- رفع محتويات مجلد `dist` إلى فرع `gh-pages`

---

### 5️⃣ تفعيل GitHub Pages

1. اذهب إلى repository الخاص بك على GitHub
2. Settings → Pages
3. في قسم "Source":
   - Branch: اختر `gh-pages`
   - Folder: اختر `/ (root)`
4. اضغط **Save**

بعد دقيقة أو اثنتين، سيظهر رابط موقعك:
```
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

---

## 📝 الأوامر المهمة

| الأمر | الوصف |
|------|------|
| `npm install` | تثبيت جميع المكتبات المطلوبة |
| `npm run dev` | تشغيل المشروع محلياً للتطوير |
| `npm run build` | بناء المشروع للإنتاج |
| `npm run deploy` | نشر المشروع على GitHub Pages |
| `npm run preview` | معاينة النسخة المبنية محلياً |

---

## 🔄 تحديث الموقع بعد التعديلات

في كل مرة تعدل على المشروع:

```bash
# 1. حفظ التغييرات في Git
git add .
git commit -m "وصف التعديلات"
git push

# 2. نشر النسخة الجديدة
npm run deploy
```

---

## ⚠️ ملاحظات مهمة

### ملف `.nojekyll`
تم إضافة ملف `.nojekyll` في مجلد `public/` لضمان عمل الملفات التي تبدأ بـ `_` على GitHub Pages.

### استخدام Domain خاص (اختياري)
إذا أردت استخدام نطاق خاص بك بدلاً من `github.io`:

1. في repository settings → Pages
2. أضف Custom domain
3. حدّث `package.json`:
```json
"homepage": "https://yourdomain.com"
```
4. حدّث `vite.config.ts`:
```typescript
base: '/',
```

---

## 🐛 حل المشاكل الشائعة

### المشكلة: الصفحة تعرض 404
**الحل:** تأكد من:
- اسم الـ base في `vite.config.ts` يطابق اسم repository
- تم تفعيل GitHub Pages من branch `gh-pages`

### المشكلة: الصور أو CSS لا تظهر
**الحل:** تأكد من:
- قيمة `base` في `vite.config.ts` صحيحة
- جميع المسارات في الكود نسبية (relative)

### المشكلة: الموقع لا يُحدّث بعد `npm run deploy`
**الحل:** 
- انتظر دقيقة أو اثنتين
- امسح cache المتصفح (Ctrl+Shift+R)
- تحقق من Actions في GitHub

---

## 📚 مصادر إضافية

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Static Deploy Guide](https://vitejs.dev/guide/static-deploy.html)
- [gh-pages Package](https://github.com/tschaub/gh-pages)

---

## ✅ Checklist

- [ ] تحديث `homepage` في `package.json`
- [ ] تحديث `base` في `vite.config.ts`
- [ ] إنشاء repository على GitHub
- [ ] رفع الكود على GitHub
- [ ] تشغيل `npm install`
- [ ] تشغيل `npm run deploy`
- [ ] تفعيل GitHub Pages من Settings
- [ ] التحقق من عمل الموقع

---

**بالتوفيق! 🎉**
