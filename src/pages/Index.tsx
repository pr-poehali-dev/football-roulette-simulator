import { useState } from "react";
import Icon from "@/components/ui/icon";

const FIELD_IMG = "https://cdn.poehali.dev/projects/288f4268-f2c2-487b-b0a5-a2aab6aa56ef/files/a9f3afcb-eb14-4f00-b658-60064c188d77.jpg";

const ROULETTE_ITEMS = [
  { label: "Редкий игрок", color: "#6B21A8", rarity: "rare", emoji: "⚽" },
  { label: "Буст ×2", color: "#166534", rarity: "common", emoji: "⚡" },
  { label: "Легендарный", color: "#B45309", rarity: "legendary", emoji: "👑" },
  { label: "500 монет", color: "#1D4ED8", rarity: "common", emoji: "💰" },
  { label: "Эпический скин", color: "#7C3AED", rarity: "epic", emoji: "🎨" },
  { label: "500 монет", color: "#1D4ED8", rarity: "common", emoji: "💰" },
  { label: "Редкий игрок", color: "#6B21A8", rarity: "rare", emoji: "⚽" },
  { label: "Травма -1", color: "#991B1B", rarity: "bad", emoji: "🩹" },
  { label: "1000 монет", color: "#065F46", rarity: "uncommon", emoji: "💰" },
  { label: "Буст ×3", color: "#0369A1", rarity: "uncommon", emoji: "🚀" },
  { label: "Легендарный", color: "#B45309", rarity: "legendary", emoji: "👑" },
  { label: "200 монет", color: "#374151", rarity: "common", emoji: "💰" },
];

const NAV_ITEMS = [
  { id: "dashboard", label: "Главная", icon: "Home" },
  { id: "matches", label: "Матчи", icon: "Swords" },
  { id: "team", label: "Команда", icon: "Users" },
  { id: "tournaments", label: "Турниры", icon: "Trophy" },
  { id: "shop", label: "Магазин", icon: "ShoppingBag" },
  { id: "profile", label: "Профиль", icon: "User" },
];

const PLAYERS = [
  { name: "Карлос Мендес", pos: "ФВ", rating: 92, speed: 95, shot: 91, pass: 78, def: 40, stamina: 88, injured: false, recoveryDays: 0 },
  { name: "Алекс Волков", pos: "ПЗ", rating: 87, speed: 82, shot: 75, pass: 92, def: 70, stamina: 85, injured: true, recoveryDays: 3 },
  { name: "Ренан Силва", pos: "ЦЗ", rating: 84, speed: 70, shot: 45, pass: 72, def: 93, stamina: 80, injured: false, recoveryDays: 0 },
  { name: "Петр Новак", pos: "ВР", rating: 89, speed: 55, shot: 30, pass: 65, def: 96, stamina: 75, injured: false, recoveryDays: 0 },
];

const TOURNAMENTS = [
  { name: "Лига Чемпионов", status: "active", prize: "50,000", teams: 16, myPos: 3, icon: "🏆" },
  { name: "Национальная Лига", status: "registration", prize: "20,000", teams: 32, myPos: null, icon: "🥇" },
  { name: "Кубок Звёзд", status: "upcoming", prize: "100,000", teams: 8, myPos: null, icon: "⭐" },
];

const MATCHES_HISTORY = [
  { opponent: "FC Tornado", result: "3:1", outcome: "win", date: "15 апр" },
  { opponent: "Real Cosmos", result: "0:2", outcome: "loss", date: "12 апр" },
  { opponent: "Blue Eagles", result: "2:2", outcome: "draw", date: "10 апр" },
  { opponent: "FC Titan", result: "4:0", outcome: "win", date: "7 апр" },
];

const CHAT_MESSAGES = [
  { user: "Sasha_Pro", text: "Кто идёт на Лигу Чемпионов?", time: "14:32" },
  { user: "GoalKing99", text: "Я только что вытащил легендарного из рулетки!", time: "14:33" },
  { user: "FootballFan", text: "Карлос Мендес — лучший ФВ сезона без вопросов", time: "14:35" },
  { user: "CoachMike", text: "Новый турнир стартует завтра в 18:00", time: "14:37" },
  { user: "TigerFC", text: "Ищу товарищеский матч, кто за?", time: "14:40" },
];

const SHOP_ITEMS = [
  { name: "Золотая рулетка", price: "500", rarity: "legendary", desc: "Гарантированный редкий игрок", emoji: "🎰" },
  { name: "Скин: Неон", price: "1200", rarity: "epic", desc: "Эксклюзивный неоновый образ", emoji: "✨" },
  { name: "Буст опыта ×3", price: "300", rarity: "rare", desc: "Тройной опыт на 24 часа", emoji: "⚡" },
  { name: "Рулетка игрока", price: "200", rarity: "common", desc: "Случайный игрок класса B-S", emoji: "⚽" },
  { name: "Набор тренера", price: "800", rarity: "rare", desc: "+5 к всем статам команды", emoji: "📋" },
  { name: "VIP Абонемент", price: "2000", rarity: "legendary", desc: "Ежедневные бонусы на 30 дней", emoji: "👑" },
];

function FootballField3D() {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl" style={{ perspective: "600px" }}>
      <div
        className="absolute inset-0 rounded-xl overflow-hidden"
        style={{ transform: "rotateX(35deg) scale(1.3)", transformOrigin: "bottom center" }}
      >
        <img src={FIELD_IMG} alt="Football Field" className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,15,7,0.9) 0%, transparent 50%, rgba(5,15,7,0.3) 100%)" }} />
        <div className="absolute inset-0 pitch-texture" />
      </div>
      <div className="absolute inset-0 flex items-end justify-around pb-6">
        {["🏃", "🏃", "🏃"].map((p, i) => (
          <div key={i} className="animate-float" style={{ animationDelay: `${i * 0.7}s` }}>
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-sm shadow-lg" style={{ boxShadow: "0 0 15px #39FF14" }}>
              {p}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 glass-dark rounded-lg px-6 py-2 neon-border">
        <div className="flex items-center gap-4 font-oswald text-xl font-bold">
          <span className="text-white">FC TITAN</span>
          <span className="neon-text">2 : 1</span>
          <span className="text-white">COSMOS FC</span>
        </div>
        <div className="text-center text-xs text-green-400 mt-0.5">67' • Прямой эфир</div>
      </div>
      <div className="absolute top-4 right-4 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
        <span className="text-xs text-red-400 font-oswald">LIVE</span>
      </div>
    </div>
  );
}

function RouletteWheel() {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<(typeof ROULETTE_ITEMS)[0] | null>(null);
  const [rotation, setRotation] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    setShowResult(false);
    const totalItems = ROULETTE_ITEMS.length;
    const winIndex = Math.floor(Math.random() * totalItems);
    const segAngle = 360 / totalItems;
    const spins = 8 + Math.random() * 4;
    const targetAngle = rotation + spins * 360 + winIndex * segAngle;
    setRotation(targetAngle);
    setTimeout(() => {
      setResult(ROULETTE_ITEMS[winIndex]);
      setSpinning(false);
      setShowResult(true);
    }, 3200);
  };

  const segAngle = 360 / ROULETTE_ITEMS.length;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative" style={{ width: 220, height: 220 }}>
        <div className="absolute inset-0 rounded-full" style={{ boxShadow: "0 0 30px rgba(57,255,20,0.4)" }} />
        <svg
          width={220}
          height={220}
          viewBox="0 0 220 220"
          className="absolute inset-0"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? "transform 3.2s cubic-bezier(0.17, 0.67, 0.12, 0.99)" : "none",
          }}
        >
          {ROULETTE_ITEMS.map((item, i) => {
            const startAngle = (i * segAngle - 90) * (Math.PI / 180);
            const endAngle = ((i + 1) * segAngle - 90) * (Math.PI / 180);
            const r = 100, cx = 110, cy = 110;
            const x1 = cx + r * Math.cos(startAngle);
            const y1 = cy + r * Math.sin(startAngle);
            const x2 = cx + r * Math.cos(endAngle);
            const y2 = cy + r * Math.sin(endAngle);
            const midAngle = ((i + 0.5) * segAngle - 90) * (Math.PI / 180);
            const tx = cx + 70 * Math.cos(midAngle);
            const ty = cy + 70 * Math.sin(midAngle);
            const largeArc = segAngle > 180 ? 1 : 0;
            return (
              <g key={i}>
                <path
                  d={`M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`}
                  fill={item.color}
                  stroke="rgba(57,255,20,0.3)"
                  strokeWidth="1"
                />
                <text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="white" style={{ userSelect: "none" }}>
                  {item.emoji}
                </text>
              </g>
            );
          })}
          <circle cx={110} cy={110} r={18} fill="#050f07" stroke="#39FF14" strokeWidth="2" />
          <text x={110} y={110} textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="#39FF14">⚽</text>
        </svg>
        <div className="absolute top-1/2 -right-3 -translate-y-1/2 z-10">
          <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderRight: "20px solid #39FF14", filter: "drop-shadow(0 0 8px #39FF14)" }} />
        </div>
      </div>

      <button
        onClick={spin}
        disabled={spinning}
        className="btn-gold px-8 py-3 rounded-lg text-lg font-bold uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {spinning ? "Крутится..." : "🎰 Крутить!"}
      </button>

      {showResult && result && (
        <div className="animate-scale-in glass-dark rounded-xl px-6 py-3 neon-border-gold text-center">
          <div className="text-3xl mb-1">{result.emoji}</div>
          <div className="font-oswald text-lg text-yellow-400">{result.label}</div>
          <div className="text-xs text-green-400 mt-0.5 uppercase tracking-wider">{result.rarity}</div>
        </div>
      )}
    </div>
  );
}

function PlayerCard({ player }: { player: (typeof PLAYERS)[0]; onClick?: () => void }) {
  const stats = [
    { label: "Скорость", value: player.speed },
    { label: "Удар", value: player.shot },
    { label: "Пас", value: player.pass },
    { label: "Защита", value: player.def },
  ];
  return (
    <div className="card-dark rounded-xl p-4 relative overflow-hidden" style={{ borderColor: player.injured ? "#FF3131" : "" }}>
      {player.injured && (
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-red-900/80 rounded-full px-2 py-0.5">
          <span className="text-xs">🩹</span>
          <span className="text-xs text-red-300 font-oswald">+{player.recoveryDays}д</span>
        </div>
      )}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-800 to-green-950 flex items-center justify-center text-2xl flex-shrink-0 border border-green-700">⚽</div>
        <div>
          <div className="font-oswald font-bold text-white text-sm">{player.name}</div>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="text-xs text-green-400 bg-green-900/50 px-2 py-0.5 rounded font-oswald">{player.pos}</span>
            <span className="font-oswald font-bold text-xl neon-text">{player.rating}</span>
          </div>
        </div>
      </div>
      <div className="space-y-1.5">
        {stats.map(stat => (
          <div key={stat.label} className="flex items-center gap-2">
            <span className="text-xs text-green-600 w-14">{stat.label}</span>
            <div className="stat-bar flex-1">
              <div className="stat-bar-fill" style={{ width: `${stat.value}%` }} />
            </div>
            <span className="text-xs text-green-300 w-6 text-right font-oswald">{stat.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MatchCard({ match }: { match: (typeof MATCHES_HISTORY)[0] }) {
  const colors: Record<string, string> = { win: "neon-text", loss: "text-red-400", draw: "text-yellow-400" };
  const labels: Record<string, string> = { win: "ПОБЕДА", loss: "ПОРАЖЕНИЕ", draw: "НИЧЬЯ" };
  return (
    <div className="card-dark rounded-lg px-4 py-3 flex items-center justify-between">
      <div>
        <div className="font-oswald text-white">{match.opponent}</div>
        <div className="text-xs text-green-600">{match.date}</div>
      </div>
      <div className="text-center">
        <div className="font-oswald text-2xl font-bold text-white">{match.result}</div>
        <div className={`text-xs font-oswald font-bold ${colors[match.outcome]}`}>{labels[match.outcome]}</div>
      </div>
    </div>
  );
}

function LiveTicker() {
  const events = [
    "⚽ 23' Гол! Карлос Мендес — FC TITAN",
    "🟨 31' Жёлтая карточка — Real Cosmos",
    "⚡ 45' Травма! Волков выходит на замену",
    "⚽ 67' Гол! Аноним — Blue Eagles",
    "🟥 78' Красная карточка — FC Storm",
    "🏆 Лига: FC TITAN лидирует с отрывом 5 очков",
  ];
  const doubled = [...events, ...events];
  return (
    <div className="relative overflow-hidden glass-dark border-t border-b border-green-900 py-2">
      <div className="flex" style={{ animation: "ticker 25s linear infinite", whiteSpace: "nowrap" }}>
        {doubled.map((e, i) => (
          <span key={i} className="inline-block px-8 text-sm text-green-400 font-roboto">
            {e} &nbsp;•&nbsp;
          </span>
        ))}
      </div>
    </div>
  );
}

function DashboardView() {
  return (
    <div className="space-y-6 animate-fade-in">
      <FootballField3D />
      <LiveTicker />
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Рейтинг", value: "#127", icon: "TrendingUp", color: "text-yellow-400" },
          { label: "Победы", value: "34", icon: "Trophy", color: "neon-text" },
          { label: "Монеты", value: "12.4K", icon: "Coins", color: "text-yellow-300" },
        ].map(stat => (
          <div key={stat.label} className="card-dark rounded-xl p-3 text-center">
            <Icon name={stat.icon} fallback="Circle" size={20} className={`mx-auto mb-1 ${stat.color}`} />
            <div className={`font-oswald text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-green-600">{stat.label}</div>
          </div>
        ))}
      </div>
      <div>
        <div className="font-oswald text-lg text-white mb-3 flex items-center gap-2">
          <span className="neon-text">▍</span> Последние матчи
        </div>
        <div className="space-y-2">
          {MATCHES_HISTORY.slice(0, 3).map((m, i) => <MatchCard key={i} match={m} />)}
        </div>
      </div>
    </div>
  );
}

function MatchesView() {
  const [tab, setTab] = useState<"pvp" | "ai" | "history">("pvp");
  return (
    <div className="space-y-5 animate-fade-in">
      <div className="flex gap-2 p-1 glass-dark rounded-xl">
        {[{ id: "pvp", label: "vs Игрок" }, { id: "ai", label: "vs ИИ" }, { id: "history", label: "История" }].map(t => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as "pvp" | "ai" | "history")}
            className={`flex-1 py-2 rounded-lg font-oswald text-sm font-bold transition-all ${tab === t.id ? "bg-green-400 text-black" : "text-green-400 hover:text-white"}`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {(tab === "pvp" || tab === "ai") && (
        <div className="space-y-4">
          <div className="card-dark rounded-xl p-5 text-center space-y-3">
            <div className="text-5xl">⚽</div>
            <div className="font-oswald text-2xl text-white">Начать матч</div>
            <div className="text-sm text-green-500">{tab === "pvp" ? "Случайный соперник из рейтинга" : "Матч против умного ИИ"}</div>
            <div className="grid grid-cols-3 gap-2 text-center mt-2">
              {[{ label: "Онлайн", value: "1,247" }, { label: "В поиске", value: "38" }, { label: "Авг. время", value: "~45с" }].map(s => (
                <div key={s.label} className="bg-green-950/50 rounded-lg p-2">
                  <div className="font-oswald text-lg neon-text">{s.value}</div>
                  <div className="text-xs text-green-600">{s.label}</div>
                </div>
              ))}
            </div>
            <button className="btn-neon w-full py-3 rounded-xl text-lg mt-2">🚀 Найти матч</button>
          </div>
          <div className="card-dark rounded-xl p-4">
            <div className="font-oswald text-white mb-1">Рулетка матча</div>
            <p className="text-sm text-green-500 mb-4">Крутите перед матчем — получите бонус или дебафф!</p>
            <RouletteWheel />
          </div>
        </div>
      )}

      {tab === "history" && (
        <div className="space-y-2">
          {MATCHES_HISTORY.map((m, i) => <MatchCard key={i} match={m} />)}
        </div>
      )}
    </div>
  );
}

function TeamView() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card-dark rounded-xl p-4">
        <div className="flex items-center justify-between mb-1">
          <div className="font-oswald text-xl text-white">FC TITAN</div>
          <div className="text-xs text-green-400 bg-green-900/40 px-3 py-1 rounded-full font-oswald">Рейтинг: 87</div>
        </div>
        <div className="text-xs text-green-600">Дивизион II • Сезон 4</div>
      </div>

      <div>
        <div className="font-oswald text-lg text-white mb-3 flex items-center gap-2">
          <span className="neon-text">▍</span> Состав команды
        </div>
        <div className="grid grid-cols-2 gap-3">
          {PLAYERS.map((p, i) => (
            <div key={i} onClick={() => setSelected(selected === i ? null : i)} className="cursor-pointer">
              <PlayerCard player={p} />
              {selected === i && (
                <div className="card-dark rounded-b-xl -mt-1 p-3 border-t border-green-900 space-y-2">
                  {p.injured && (
                    <div className="flex items-center gap-2 text-red-400 text-xs">
                      <span>🩹</span>
                      <span>Травмирован. Восстановление: {p.recoveryDays} дня</span>
                    </div>
                  )}
                  <div className="text-xs text-green-500">Выносливость: {p.stamina}%</div>
                  <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: `${p.stamina}%` }} />
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button className="btn-neon flex-1 py-1.5 rounded-lg text-xs">⬆ Прокачать</button>
                    {p.injured && <button className="flex-1 py-1.5 rounded-lg text-xs bg-red-900/50 border border-red-700 text-red-300">💊 Лечить</button>}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <button className="btn-neon w-full py-3 rounded-xl flex items-center justify-center gap-2">
        <Icon name="UserPlus" size={18} />
        <span>Подобрать игрока на трансфер</span>
      </button>
    </div>
  );
}

function TournamentsView() {
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="font-oswald text-lg text-white flex items-center gap-2">
        <span className="neon-text">▍</span> Активные турниры
      </div>
      {TOURNAMENTS.map((t, i) => (
        <div key={i} className="card-dark rounded-xl p-5 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-3xl mb-1">{t.icon}</div>
              <div className="font-oswald text-xl text-white">{t.name}</div>
              <div className="text-sm text-green-500">{t.teams} команд</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-green-600 mb-1">Призовой фонд</div>
              <div className="font-oswald text-xl text-yellow-400">💰 {t.prize}</div>
              {t.myPos && <div className="text-xs text-green-400 mt-1">Моя позиция: #{t.myPos}</div>}
            </div>
          </div>
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-oswald font-bold ${
            t.status === "active" ? "bg-green-900/60 text-green-300 border border-green-700" :
            t.status === "registration" ? "bg-blue-900/60 text-blue-300 border border-blue-700" :
            "bg-gray-800 text-gray-400 border border-gray-700"
          }`}>
            {t.status === "active" ? "🟢 Активен" : t.status === "registration" ? "📝 Регистрация" : "⏳ Скоро"}
          </div>
          <button className={`w-full py-2.5 rounded-xl font-oswald font-bold text-sm ${
            t.status === "active" ? "btn-neon" : t.status === "registration" ? "btn-gold" : "opacity-40 cursor-not-allowed border border-gray-700 text-gray-500"
          }`}>
            {t.status === "active" ? "Перейти в турнир" : t.status === "registration" ? "Зарегистрироваться" : "Ожидание"}
          </button>
        </div>
      ))}

      <div>
        <div className="font-oswald text-lg text-white mb-3 flex items-center gap-2">
          <span className="neon-text">▍</span> Таблица лидеров
        </div>
        <div className="card-dark rounded-xl overflow-hidden">
          {[
            { pos: 1, name: "ProKing_FC", pts: 24, emoji: "🥇", isMe: false },
            { pos: 2, name: "SkyBolts", pts: 21, emoji: "🥈", isMe: false },
            { pos: 3, name: "FC TITAN", pts: 19, emoji: "🥉", isMe: true },
            { pos: 4, name: "Real Cosmos", pts: 17, emoji: "4️⃣", isMe: false },
          ].map((row, i) => (
            <div key={i} className={`flex items-center px-4 py-3 ${row.isMe ? "bg-green-950/50 border-l-2 border-green-400" : ""} ${i < 3 ? "border-b border-green-950" : ""}`}>
              <div className="text-xl w-8">{row.emoji}</div>
              <div className={`font-oswald flex-1 ml-3 ${row.isMe ? "neon-text" : "text-white"}`}>{row.name}</div>
              <div className={`font-oswald font-bold ${row.isMe ? "neon-text" : "text-green-400"}`}>{row.pts} оч</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileView() {
  const achievements = [
    { name: "Первая победа", icon: "⭐", done: true },
    { name: "10 матчей", icon: "🏅", done: true },
    { name: "Легенда рулетки", icon: "🎰", done: false },
    { name: "Без пропущенных", icon: "🛡️", done: true },
    { name: "Финал турнира", icon: "🏆", done: false },
    { name: "Карьерный игрок", icon: "🌟", done: false },
  ];
  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card-dark rounded-xl p-5 text-center relative overflow-hidden">
        <div className="absolute inset-0 pitch-texture opacity-50" />
        <div className="relative">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-600 to-green-900 flex items-center justify-center text-4xl mx-auto mb-3 border-2 border-green-400" style={{ boxShadow: "0 0 20px rgba(57,255,20,0.5)" }}>
            ⚽
          </div>
          <div className="font-oswald text-2xl text-white font-bold">FC TITAN</div>
          <div className="text-sm text-green-400 mt-0.5">Уровень 34 • Ветеран</div>
          <div className="flex justify-center gap-6 mt-4">
            {[{ label: "Матчи", value: "127" }, { label: "Победы", value: "34" }, { label: "Голы", value: "89" }].map(s => (
              <div key={s.label} className="text-center">
                <div className="font-oswald text-xl neon-text">{s.value}</div>
                <div className="text-xs text-green-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-dark rounded-xl p-4">
        <div className="font-oswald text-white mb-3">Карьера игрока</div>
        <div className="space-y-2">
          {[{ label: "Опыт до уровня 35", value: 68 }, { label: "Репутация", value: 84 }, { label: "Форма сезона", value: 91 }].map(s => (
            <div key={s.label}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-green-500">{s.label}</span>
                <span className="text-green-300 font-oswald">{s.value}%</span>
              </div>
              <div className="stat-bar">
                <div className="stat-bar-fill" style={{ width: `${s.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="font-oswald text-lg text-white mb-3 flex items-center gap-2">
          <span className="neon-text">▍</span> Достижения
        </div>
        <div className="grid grid-cols-3 gap-2">
          {achievements.map((a, i) => (
            <div key={i} className={`card-dark rounded-xl p-3 text-center ${!a.done ? "opacity-40" : ""}`}>
              <div className="text-2xl mb-1">{a.icon}</div>
              <div className="text-xs text-green-400 leading-tight">{a.name}</div>
              {a.done && <div className="text-xs neon-text mt-1">✓</div>}
            </div>
          ))}
        </div>
      </div>

      <div className="card-dark rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-green-900 font-oswald text-white flex items-center gap-2">
          <Icon name="MessageSquare" size={16} className="text-green-400" />
          Глобальный чат
        </div>
        <div className="p-3 space-y-3 max-h-48 overflow-y-auto scrollbar-none">
          {CHAT_MESSAGES.map((m, i) => (
            <div key={i} className="flex gap-2">
              <div className="w-6 h-6 rounded-full bg-green-900 flex items-center justify-center text-xs flex-shrink-0">⚽</div>
              <div>
                <span className="text-xs text-green-400 font-oswald">{m.user}</span>
                <span className="text-xs text-green-700 ml-1">{m.time}</span>
                <div className="text-sm text-gray-300 mt-0.5">{m.text}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-3 pb-3 flex gap-2">
          <input
            type="text"
            placeholder="Написать в чат..."
            className="flex-1 bg-green-950/50 border border-green-800 rounded-lg px-3 py-2 text-sm text-white placeholder-green-700 outline-none focus:border-green-400"
          />
          <button className="btn-neon px-3 py-2 rounded-lg">
            <Icon name="Send" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ShopView() {
  const rarityColors: Record<string, string> = {
    legendary: "border-yellow-500 bg-yellow-950/30",
    epic: "border-purple-500 bg-purple-950/30",
    rare: "border-blue-500 bg-blue-950/30",
    common: "border-green-800 bg-green-950/20",
  };
  const rarityLabels: Record<string, string> = {
    legendary: "🌟 Легендарный",
    epic: "💜 Эпический",
    rare: "💙 Редкий",
    common: "Обычный",
  };

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="card-dark rounded-xl p-4 flex items-center justify-between">
        <div>
          <div className="font-oswald text-white">Баланс</div>
          <div className="font-oswald text-3xl text-yellow-400">💰 12,400</div>
        </div>
        <button className="btn-gold px-4 py-2 rounded-lg text-sm">+ Пополнить</button>
      </div>

      <div className="font-oswald text-lg text-white flex items-center gap-2">
        <span className="neon-text">▍</span> Магазин
      </div>

      <div className="grid grid-cols-2 gap-3">
        {SHOP_ITEMS.map((item, i) => (
          <div key={i} className={`card-dark rounded-xl p-4 border ${rarityColors[item.rarity]} space-y-2`}>
            <div className="text-3xl">{item.emoji}</div>
            <div className="font-oswald text-white text-sm font-bold leading-tight">{item.name}</div>
            <div className="text-xs text-green-500 leading-tight">{item.desc}</div>
            <div className="text-xs font-oswald text-yellow-400">{rarityLabels[item.rarity]}</div>
            <button className="btn-gold w-full py-1.5 rounded-lg text-sm mt-1">💰 {item.price}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Index() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const views: Record<string, JSX.Element> = {
    dashboard: <DashboardView />,
    matches: <MatchesView />,
    team: <TeamView />,
    tournaments: <TournamentsView />,
    profile: <ProfileView />,
    shop: <ShopView />,
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--pitch-dark)" }}>
      <div className="glass-dark border-b border-green-900 sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-oswald text-xl font-bold">
            <span className="neon-text">FOOTBALL</span>
            <span className="text-white">X</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-yellow-950/60 border border-yellow-700/50 rounded-full px-3 py-1">
              <span className="text-sm">💰</span>
              <span className="font-oswald text-yellow-400 text-sm">12,400</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-900 border border-green-700 flex items-center justify-center text-sm">⚽</div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-5 pb-28">
        {views[activeTab]}
      </div>

      <div className="fixed bottom-0 left-0 right-0 glass-dark border-t border-green-900 z-50">
        <div className="max-w-lg mx-auto px-2 py-2 flex justify-around">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all ${
                activeTab === item.id ? "bg-green-900/60 text-green-300" : "text-green-700 hover:text-green-400"
              }`}
            >
              <Icon name={item.icon} fallback="Circle" size={20} />
              <span className="text-xs font-oswald">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}