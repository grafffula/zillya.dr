export interface StoryBlock {
  id: string;
  stepNumber: string;
  category: string;
  title: string;
  sentence: string;
  gradientClass: string;
  accentLabel: string;
  iconName: 'crown' | 'cake' | 'heart' | 'sun' | 'palmtree';
}

export interface FamilyMemberWish {
  id: 'younger-son' | 'older-brother' | 'husband-fanis';
  senderName: string;
  roleLabel: string;
  sentence: string;
  toastHighlight: string;
  gradientClass: string;
}

export interface CandleItem {
  id: string;
  label: string;
  wishWord: string;
  isLit: boolean;
}

export const STORY_BLOCKS: StoryBlock[] = [
  {
    id: 'jubilee-55',
    stepNumber: '01',
    category: 'Золотой Юбилей · 55 лет',
    title: 'С Днём Рождения, родная мама Зиля!',
    sentence:
      'Родная наша мама Зиля, от всей души поздравляем тебя с прекрасным и светлым юбилеем — 55-летием!',
    gradientClass:
      'from-orange-500 via-amber-500 to-orange-600',
    accentLabel: 'Главная именинница сегодня',
    iconName: 'crown',
  },
  {
    id: 'master-chef',
    stepNumber: '02',
    category: 'Королева кулинарии и выпечки',
    title: 'Волшебница самых вкусных блюд',
    sentence:
      'Твой многолетний талант повара превращает каждое блюдо, домашнюю выпечку и праздничный торт в настоящее чудо!',
    gradientClass:
      'from-amber-500 via-orange-500 to-red-500',
    accentLabel: 'Самые вкусные торты и угощения',
    iconName: 'cake',
  },
  {
    id: 'family-love',
    stepNumber: '03',
    category: 'Семья всегда рядом',
    title: 'Наше счастье и благодарность',
    sentence:
      'Мы всегда в восторге от твоей заботы и бесконечно тебя любим!',
    gradientClass:
      'from-orange-600 via-amber-500 to-yellow-500',
    accentLabel: 'Любим, ценим и гордимся',
    iconName: 'heart',
  },
  {
    id: 'home-and-garden',
    stepNumber: '04',
    category: 'Родной дом и летняя отдушина',
    title: 'Береги себя и свои силы',
    sentence:
      'Пусть уютный дом и любимый огород радуют душу, но, пожалуйста, береги свои силы и отдыхай почаще!',
    gradientClass:
      'from-amber-600 via-orange-500 to-amber-500',
    accentLabel: 'Больше отдыха, меньше усталости',
    iconName: 'sun',
  },
  {
    id: 'happy-vacation',
    stepNumber: '05',
    category: 'Ура, долгожданный отпуск!',
    title: 'С выходом в заслуженный отпуск!',
    sentence:
      'Со вчерашнего дня у тебя начался долгожданный отпуск — проведи его в полном удовольствии, покое и радости!',
    gradientClass:
      'from-orange-500 via-rose-500 to-amber-500',
    accentLabel: 'Двойной праздник со вчерашнего дня',
    iconName: 'palmtree',
  },
];

export const FAMILY_WISHES: FamilyMemberWish[] = [
  {
    id: 'younger-son',
    senderName: 'От младшего сына',
    roleLabel: 'Младший сын',
    sentence:
      'Мамочка, спасибо за твоё огромное сердце и самые вкусные на свете угощения — будь здорова, счастлива и отдыхай побольше!',
    toastHighlight: 'С любовью и нежностью каждую минуту',
    gradientClass: 'from-orange-500 via-amber-500 to-orange-600',
  },
  {
    id: 'older-brother',
    senderName: 'От старшего сына',
    roleLabel: 'Старший брат',
    sentence:
      'Любимая мама Зиля, твой уют, доброта и шикарная выпечка согревают нас всегда — пусть в 55 лет жизнь дарит только радость!',
    toastHighlight: 'Гордимся тобой и очень дорожим',
    gradientClass: 'from-amber-500 via-orange-500 to-rose-500',
  },
  {
    id: 'husband-fanis',
    senderName: 'От мужа Фаниса',
    roleLabel: 'Любящий муж Фанис',
    sentence:
      'Родная Зиля, спасибо за наш тёплый дом, счастливые годы вместе и твои золотые руки — пусть этот отпуск и юбилей будут незабываемыми!',
    toastHighlight: 'Вместе в уютном доме и в радости',
    gradientClass: 'from-orange-600 via-amber-500 to-yellow-500',
  },
];

export const INITIAL_CANDLES: CandleItem[] = [
  { id: 'c1', label: 'Крепкое здоровье', wishWord: 'Здоровье на 100 лет!', isLit: true },
  { id: 'c2', label: 'Лёгкий отпуск', wishWord: 'Отдых без забот!', isLit: true },
  { id: 'c3', label: 'Радость в доме', wishWord: 'Уют и гармония!', isLit: true },
  { id: 'c4', label: 'Лето без усталости', wishWord: 'Огород только в удовольствие!', isLit: true },
  { id: 'c5', label: 'Счастье каждый день', wishWord: 'Море улыбок и цветов!', isLit: true },
];

export function getNextStepIndex(currentIndex: number, total: number = STORY_BLOCKS.length): number {
  if (total <= 0) return 0;
  return (currentIndex + 1) % total;
}

export function getPrevStepIndex(currentIndex: number, total: number = STORY_BLOCKS.length): number {
  if (total <= 0) return 0;
  return (currentIndex - 1 + total) % total;
}

export function toggleCandleState(candles: CandleItem[], candleId: string): CandleItem[] {
  return candles.map((c) => (c.id === candleId ? { ...c, isLit: !c.isLit } : c));
}

export function blowOutAllCandles(candles: CandleItem[]): CandleItem[] {
  return candles.map((c) => ({ ...c, isLit: false }));
}

export function relightAllCandles(candles: CandleItem[]): CandleItem[] {
  return candles.map((c) => ({ ...c, isLit: true }));
}

export function areAllCandlesBlownOut(candles: CandleItem[]): boolean {
  return candles.length > 0 && candles.every((c) => !c.isLit);
}

export function countExtinguishedCandles(candles: CandleItem[]): number {
  return candles.filter((c) => !c.isLit).length;
}

export function getFamilyWishById(id: FamilyMemberWish['id']): FamilyMemberWish {
  return FAMILY_WISHES.find((w) => w.id === id) ?? FAMILY_WISHES[0];
}
