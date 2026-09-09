'use client'

import { useEffect, useMemo, useState } from 'react'

type Post = {
  id: number
  name: string
  handle: string
  text: string
  time: string
  likes: number
  comments: number
  liked?: boolean
  verified?: boolean
}

const tabs = [
  { id: 'Inicio', icon: '⌂' },
  { id: 'Pulse', icon: '▶' },
  { id: 'Grid Studio', icon: '●' },
  { id: 'Gaming', icon: '◈' },
  { id: 'Wallet', icon: '◇' },
]

const initialPosts: Post[] = [
  { id: 1, name: 'Alex Grid', handle: '@alexgrid', text: 'Bienvenidos a The Grid. Un nuevo espacio para crear, compartir y transmitir sin salir de tu universo.', time: 'Ahora', likes: 128, comments: 18, verified: true },
  { id: 2, name: 'Mica Stream', handle: '@mica', text: 'Grid Studio listo. Esta noche probamos el nuevo setup de streaming en vivo. ¿Quién se conecta?', time: '12 min', likes: 64, comments: 9, verified: true },
  { id: 3, name: 'Nexus Gaming', handle: '@nexus', text: 'Nuevo Drop desbloqueado: Neon Runner. El evento empieza en 42 minutos.', time: '31 min', likes: 42, comments: 6 },
]

const pulses = [
  { title: 'Night Drive', creator: '@mica', views: '18.4K', tag: 'MÚSICA' },
  { title: 'Ranked Rush', creator: '@nexus', views: '9.8K', tag: 'GAMING' },
  { title: 'Creator Lab', creator: '@alexgrid', views: '7.2K', tag: 'CREATOR' },
  { title: 'After Hours', creator: '@luna', views: '5.6K', tag: 'LIVE' },
]

function Icon({ children }: { children: React.ReactNode }) {
  return <span className="iconGlyph" aria-hidden="true">{children}</span>
}

export default function Home() {
  const [tab, setTab] = useState('Inicio')
  const [posts, setPosts] = useState<Post[]>(initialPosts)
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')
  const [notice, setNotice] = useState('')
  const [showProfile, setShowProfile] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [following, setFollowing] = useState(false)
  const [live, setLive] = useState(false)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem('grid-posts')
      if (saved) setPosts(JSON.parse(saved))
    } catch {
      // Preview remains usable when storage is unavailable.
    }
  }, [])

  useEffect(() => {
    try { window.localStorage.setItem('grid-posts', JSON.stringify(posts)) } catch {}
  }, [posts])

  const filteredPosts = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return posts
    return posts.filter((post) => `${post.name} ${post.handle} ${post.text}`.toLowerCase().includes(q))
  }, [posts, search])

  const publish = () => {
    const value = text.trim()
    if (!value) return
    setPosts([{ id: Date.now(), name: 'Tú', handle: '@usuario', text: value, time: 'Ahora', likes: 0, comments: 0 }, ...posts])
    setText('')
    setNotice('Publicación compartida en tu feed')
    window.setTimeout(() => setNotice(''), 2400)
  }

  const toggleLike = (id: number) => {
    setPosts(posts.map((post) => post.id === id ? { ...post, liked: !post.liked, likes: post.likes + (post.liked ? -1 : 1) } : post))
  }

  const action = (message: string) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 2200)
  }

  return (
    <main className="appShell">
      <aside className="sidebar">
        <div className="brand" onClick={() => setTab('Inicio')} role="button" tabIndex={0}>
          <span className="brandMark">G</span>
          <span>THE <b>GRID</b></span>
        </div>

        <nav className="mainNav" aria-label="Navegación principal">
          {tabs.map((item) => (
            <button key={item.id} className={tab === item.id ? 'navItem active' : 'navItem'} onClick={() => setTab(item.id)}>
              <Icon>{item.icon}</Icon><span>{item.id}</span>
            </button>
          ))}
        </nav>

        <button className="primaryButton composeButton" onClick={() => { setTab('Inicio'); window.setTimeout(() => document.getElementById('composer')?.focus(), 0) }}>
          <span>＋</span> Crear publicación
        </button>

        <div className="sidebarFooter">
          <button className="profileMini" onClick={() => setShowProfile(true)}>
            <span className="avatar avatarMe">G</span>
            <span><b>Tu perfil</b><small>@usuario</small></span>
            <span className="dots">•••</span>
          </button>
        </div>
      </aside>

      <section className="feedColumn">
        <header className="topbar">
          <div className="pageTitle"><span className="eyebrow">THE GRID</span><h1>{tab}</h1></div>
          <div className="topActions">
            <label className="searchBox"><Icon>⌕</Icon><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar en The Grid" aria-label="Buscar" /></label>
            <button className="circleButton" onClick={() => setShowNotifications(true)} aria-label="Notificaciones">♢<span className="notificationDot" /></button>
            <button className="avatar avatarMe topAvatar" onClick={() => setShowProfile(true)} aria-label="Abrir perfil">G</button>
          </div>
        </header>

        {tab === 'Inicio' && (
          <>
            <div className="heroStrip">
              <div><span className="livePill"><i /> ONLINE</span><h2>Tu red.<br /><em>Tu universo.</em></h2><p>Comparte ideas, descubre Pulse y entra en directo con The Grid.</p></div>
              <div className="heroOrb"><span>G</span></div>
            </div>

            <div className="composerCard">
              <div className="avatar avatarMe">G</div>
              <div className="composerMain">
                <textarea id="composer" value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => { if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') publish() }} placeholder="¿Qué está pasando en tu mundo?" />
                <div className="composerTools">
                  <div className="toolLinks"><button onClick={() => action('Selector de imagen listo')}>▧ Foto</button><button onClick={() => action('Selector de video listo')}>▶ Video</button><button onClick={() => action('Encuesta creada en modo demo')}>◒ Encuesta</button></div>
                  <button className="primaryButton publishButton" onClick={publish}>Publicar</button>
                </div>
              </div>
            </div>

            <div className="sectionHeading"><div><span className="eyebrow">LIVE FEED</span><h2>Para ti</h2></div><button onClick={() => action('Feed actualizado')}>Actualizar ↻</button></div>
            <div className="postList">
              {filteredPosts.map((post) => (
                <article className="postCard" key={post.id}>
                  <div className="postAvatar avatar">{post.name[0]}</div>
                  <div className="postBody">
                    <div className="postMeta"><div><b>{post.name}</b>{post.verified && <span className="verified">✓</span>} <span className="muted">{post.handle} · {post.time}</span></div><button className="moreButton">•••</button></div>
                    <p>{post.text}</p>
                    <div className="postActions">
                      <button className={post.liked ? 'liked' : ''} onClick={() => toggleLike(post.id)}><Icon>{post.liked ? '♥' : '♡'}</Icon>{post.likes}</button>
                      <button onClick={() => action('Los comentarios estarán disponibles en la siguiente capa')}>◌ {post.comments}</button>
                      <button onClick={() => action('Publicación preparada para compartir')}>↗ Compartir</button>
                      <button onClick={() => action('Guardado en tu colección')}>◇</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}

        {tab === 'Pulse' && <div className="modulePage"><div className="moduleHero"><span className="eyebrow">SHORT VIDEO</span><h2>Pulse <em>in motion.</em></h2><p>Descubre clips verticales, creadores y momentos que están encendiendo The Grid.</p><button className="primaryButton" onClick={() => action('Reproducción de Pulse iniciada')}>▶ Explorar Pulse</button></div><div className="pulseGrid">{pulses.map((pulse, index) => <button className="pulseCard" key={pulse.title} onClick={() => action(`Reproduciendo ${pulse.title}`)}><div className={`pulseVisual v${index + 1}`}><span>{pulse.tag}</span><b>▶</b></div><strong>{pulse.title}</strong><small>{pulse.creator} · {pulse.views} views</small></button>)}</div></div>}

        {tab === 'Grid Studio' && <div className="modulePage"><div className="studioPanel"><div><span className="eyebrow">BROADCAST CONTROL</span><h2>Grid Studio</h2><p>Tu centro de emisión. Controla el estado del canal, prepara tu directo y monitoriza la audiencia.</p></div><div className={live ? 'streamPreview isLive' : 'streamPreview'}><span className="streamBadge">{live ? '● EN DIRECTO' : 'PREVIEW'}</span><div className="streamLogo">G</div><strong>{live ? 'The Grid Live' : 'Tu próxima transmisión'}</strong><small>{live ? '128 espectadores conectados' : 'Listo para emitir'}</small></div><button className="primaryButton studioButton" onClick={() => { setLive(!live); action(live ? 'Transmisión detenida' : 'Transmisión iniciada en modo demo') }}>{live ? '■ Detener transmisión' : '● Iniciar transmisión'}</button></div><div className="statsRow"><div><small>ESPECTADORES</small><b>{live ? '128' : '—'}</b></div><div><small>CALIDAD</small><b>1080p</b></div><div><small>LATENCIA</small><b>Low</b></div><div><small>ESTADO</small><b className="green">● Ready</b></div></div></div>}

        {tab === 'Gaming' && <div className="modulePage"><div className="gamingHeader"><span className="eyebrow">GAMING NEXUS</span><h2>Juega. Mira. <em>Gana.</em></h2><p>Tu actividad, tus drops y tus comunidades gaming en un solo lugar.</p></div><div className="gameCards"><div className="gameCard featuredGame"><span>DROP EVENT</span><h3>NEON<br />RUNNER</h3><p>Rare drop · 42 min</p><button className="primaryButton" onClick={() => action('Te has unido al evento Neon Runner')}>Unirme al evento</button></div><div className="gameCard"><span>NOW PLAYING</span><h3>RANKED<br />RUSH</h3><p>12 friends online</p><button onClick={() => action('Rich Presence conectado')}>Ver actividad</button></div><div className="gameCard"><span>YOUR LEVEL</span><h3>LEVEL<br />27</h3><p>+1,240 XP this week</p><button onClick={() => action('Perfil gaming abierto')}>Ver progreso</button></div></div></div>}

        {tab === 'Wallet' && <div className="modulePage"><div className="walletHero"><div><span className="eyebrow">CLOUD WALLET</span><h2>Tu economía, <em>en un lugar.</em></h2><p>Visualiza ingresos de creator, suscripciones y recompensas.</p></div><div className="balance"><small>BALANCE DISPONIBLE</small><strong>$ 2,840.50</strong><span>↑ 18.4% este mes</span></div></div><div className="walletGrid"><div className="walletCard"><small>ESTE MES</small><b>$ 1,284.20</b><span>Ingresos de creator</span><div className="miniChart"><i/><i/><i/><i/><i/><i/><i/><i/></div></div><div className="walletCard"><small>SUBSCRIPCIONES</small><b>348</b><span>miembros activos</span><button onClick={() => action('Panel de suscripciones abierto')}>Gestionar →</button></div><div className="walletCard"><small>PRÓXIMO PAGO</small><b>18 SEP</b><span>Transferencia estimada</span><button onClick={() => action('Detalle de payout abierto')}>Ver detalle →</button></div></div></div>}
      </section>

      <aside className="rightRail">
        <div className="railCard profileCard"><div className="cover" /><div className="profileContent"><div className="avatar avatarLarge avatarMe">G</div><div className="profileName"><h3>Tu perfil</h3><span>@usuario</span></div><button className={following ? 'followButton following' : 'followButton'} onClick={() => setFollowing(!following)}>{following ? 'Siguiendo' : 'Seguir'}</button><p>Explorando The Grid · Creator preview</p><div className="profileStats"><span><b>1.2K</b> seguidores</span><span><b>284</b> siguiendo</span></div></div></div>
        <div className="railCard"><div className="railTitle"><span><i className="greenDot"/> Tendencias</span><button onClick={() => action('Tendencias actualizadas')}>↻</button></div><div className="trend"><small>01 · GAMING</small><b>#NeonRunner</b><span>2,840 posts</span></div><div className="trend"><small>02 · CREATOR</small><b>#GridStudio</b><span>1,420 posts</span></div><div className="trend"><small>03 · PULSE</small><b>#NightDrive</b><span>982 posts</span></div></div>
        <div className="railCard liveCard"><div className="railTitle"><span><i className="liveDot"/> En vivo ahora</span><b>24</b></div><div className="livePerson"><span className="avatar small">M</span><span><b>Mica Stream</b><small>Late Night Session</small></span><button onClick={() => { setTab('Grid Studio'); action('Entrando a la preview del directo') }}>Ver</button></div><div className="livePerson"><span className="avatar small altAvatar">N</span><span><b>Nexus Gaming</b><small>Ranked Rush</small></span><button onClick={() => action('Abriendo directo de gaming')}>Ver</button></div></div>
        <div className="railFooter">The Grid · Preview 0.9 · <button onClick={() => action('Centro de privacidad abierto')}>Privacidad</button> · <button onClick={() => action('Ayuda abierta')}>Ayuda</button></div>
      </aside>

      {notice && <div className="toast">✓ {notice}</div>}

      {showNotifications && <div className="modalBackdrop" onClick={() => setShowNotifications(false)}><div className="modal" onClick={(e) => e.stopPropagation()}><div className="modalHeader"><div><span className="eyebrow">ACTIVIDAD</span><h2>Notificaciones</h2></div><button className="closeButton" onClick={() => setShowNotifications(false)}>×</button></div><div className="notification"><span className="avatar small">A</span><p><b>Alex Grid</b> empezó a seguirte.<small>Hace 4 min</small></p></div><div className="notification"><span className="avatar small altAvatar">M</span><p><b>Mica Stream</b> publicó en Grid Studio.<small>Hace 12 min</small></p></div><div className="notification"><span className="avatar small">N</span><p><b>Nexus Gaming</b> desbloqueó un Drop.<small>Hace 31 min</small></p></div></div></div>}

      {showProfile && <div className="modalBackdrop" onClick={() => setShowProfile(false)}><div className="modal profileModal" onClick={(e) => e.stopPropagation()}><div className="modalHeader"><div><span className="eyebrow">CUENTA</span><h2>Tu perfil</h2></div><button className="closeButton" onClick={() => setShowProfile(false)}>×</button></div><div className="profileEdit"><div className="avatar avatarLarge avatarMe">G</div><h3>Tu perfil</h3><span>@usuario</span><p>Este perfil es parte del preview funcional de The Grid. Los cambios persistirán localmente en este navegador.</p><button className="primaryButton" onClick={() => action('Perfil guardado en modo demo')}>Guardar cambios</button></div></div></div>}
    </main>
  )
}
