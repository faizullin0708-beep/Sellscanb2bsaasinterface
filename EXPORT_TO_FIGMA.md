# Инструкция: Экспорт из Make в Figma Design

## Проблема
При копировании дизайна из Figma Make в Figma Design контент обрезается по высоте экрана.

## Решение

### ✅ Способ 1: JavaScript для растягивания контента (ЛУЧШИЙ)

1. Откройте страницу в Make
2. Откройте DevTools (F12)
3. В Console выполните:
```javascript
// Растянуть body на полную высоту контента
document.body.style.height = document.body.scrollHeight + 'px';
document.documentElement.style.height = document.body.scrollHeight + 'px';

// Убрать overflow
document.querySelector('main').style.overflow = 'visible';
document.body.style.overflow = 'visible';
```
4. Теперь выделите всю страницу и скопируйте в Figma

### ✅ Способ 2: Export по секциям

Копируйте каждый компонент отдельно:

**Dashboard Page секции:**
1. Header (заголовок + кнопки синхронизации)
2. KPI Cards (6 карточек с метриками)
3. Charts Row (2 графика)
4. Tables Row (топ прибыльных/убыточных)
5. Bottom Row (остатки + алерты)

**Каждую секцию:**
- Выделите мышью в Make
- Cmd/Ctrl + C
- Вставьте в отдельный frame в Design
- Соберите все вместе

### ✅ Способ 3: Screenshot через браузер

**Chrome/Edge:**
1. F12 → Cmd/Ctrl + Shift + P
2. Введите "Capture full size screenshot"
3. Enter
4. Импортируйте PNG в Figma как reference

**Firefox:**
1. F12 → Правый клик на page → "Screenshot Node"
2. Выберите полную страницу

### ✅ Способ 4: Готовые artboards

Я подготовил полную документацию layouts в:
- `/workspaces/default/code/FIGMA_LAYOUTS.md` - ASCII mockups всех экранов
- `/workspaces/default/code/DESIGN_SYSTEM.md` - Полная документация компонентов

Вы можете воссоздать дизайн в Figma Design по этой документации с нуля.

## Размеры фреймов для Figma

```
Desktop:  1440 × (auto-height, min 900)
Tablet:   768 × (auto-height, min 1024)
Mobile:   375 × (auto-height, min 812)
```

## Настройки Auto Layout в Figma

**Main Container:**
- Direction: Horizontal
- Padding: 0
- Gap: 0
- Width: Fixed (1440)
- Height: Hug contents

**Sidebar:**
- Direction: Vertical
- Padding: 0
- Gap: 0
- Width: Fixed (256px)
- Height: Fill container

**Main Content:**
- Direction: Vertical
- Padding: 32px (все стороны)
- Gap: 32px
- Width: Fill container
- Height: Hug contents

**Grid (Cards):**
- Direction: Horizontal
- Wrap: Yes
- Gap: 24px
- Width: Fill
- Height: Hug

## После импорта

1. **Проверьте constraints:** Все элементы должны иметь "Hug" или "Fill", а не фиксированные высоты
2. **Auto Layout:** Все контейнеры должны быть Auto Layout фреймами
3. **Spacing:** Проверьте gap между элементами (24px или 32px)
4. **Colors:** Используйте color styles из DESIGN_SYSTEM.md

## Проблемы и решения

**Проблема:** Карточки обрезаются
**Решение:** Установите height: Hug contents на всех Card фреймах

**Проблема:** Sidebar не на всю высоту
**Решение:** Sidebar height: Fill container

**Проблема:** Графики не видны
**Решение:** Chart containers: width Fill, height Fixed 300px

**Проблема:** Текст обрезается
**Решение:** Text layers: Auto width или Auto height, не Fixed
