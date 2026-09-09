'use client'

import { useState, type ReactNode } from 'react'

type IconName = 'home' | 'search' | 'pulse' | 'live' | 'message' | 'profile' | 'bell' | 'plus' | 'sparkles' | 'users'
type Tab = 'Inicio' | 'Buscar' | 'Pulses' | 'Lives' | 'Mensajes' | 'Perfil'

const tabs: readonly { id: Tab; icon: IconName }[] = [
  { id: 'Inicio', icon: 'home' },
  { id: 'Buscar', icon: 'search' },
  { id: 'Pulses', icon: 'pulse' },
  { id: 'Lives', icon: 'live' },
  { id: 'Mensajes', icon: 'message' },
  { id: 'Perfil', icon: 'profile' },
]

const emptyStates: Record<Exclude<Tab, 'Buscar' | 'Perfil'>, { icon: IconName; title: string; description: string }> = {
  Inicio: { icon: 'sparkles', title: 'Todavía no hay publicaciones', description: 'Seguí usuarios para llenar tu feed.' },
  Pulses: { icon: 'pulse', title: 'Todavía no hay pulses', description: 'Sé el primero en subir un video corto vertical.' },
  Lives: { icon: 'live', title: 'No hay directos en vivo', description: 'Cuando un creador comience a transmitir, aparecerá aquí.' },
  Mensajes: { icon: 'message', title: 'No tienes conversaciones', description: 'Empezá una nueva conversación con el botón +.' },
}

function Icon({ name, size = 40 }: { name: IconName; size?: number }): ReactNode {
  const common = { width: size, height: size, viewBox: '0 0 48 48', fill: 'none', 'aria-hidden': true } as const
  switch (name) {
    case 'home': return <svg {...common}><path d="m8 22 16-13 16 13v17a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3V22Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><path d="M19 42V28h10v14" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg>
    case 'search': return <svg {...common}><circle cx="21" cy="21" r="13" stroke="currentColor" strokeWidth="2.2"/><path d="m31 31 10 10" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
    case 'pulse': return <svg {...common}><path d="m27 5-16 21h12l-2 17 16-22H25l2-16Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg>
    case 'live': return <svg {...common}><circle cx="24" cy="24" r="4" fill="currentColor"/><path d="M16 17a10 10 0 0 0 0 14M32 17a10 10 0 0 1 0 14M11 12a17 17 0 0 0 0 24M37 12a17 17 0 0 1 0 24" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
    case 'message': return <svg {...common}><path d="M8 10a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v18a4 4 0 0 1-4 4H20l-9 7v-7H12a4 4 0 0 1-4-4V10Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/></svg>
    case 'profile': return <svg {...common}><circle cx="24" cy="16" r="7" stroke="currentColor" strokeWidth="2.2"/><path d="M11 41c1.5-7 5.8-11 13-11s11.5 4 13 11" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
    case 'bell': return <svg {...common}><path d="M12 34h24c-3-3-4-6-4-12 0-6-3.2-10-8-10s-8 4-8 10c0 6-1 9-4 12Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/><path d="M19 39c.9 2 2.3 3 5 3s4.1-1 5-3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
    case 'plus': return <svg {...common}><path d="M24 10v28M10 24h28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
    case 'sparkles': return <svg {...common}><path d="m24 7 4.5 12.5L41 24l-12.5 4.5L24 41l-4.5-12.5L7 24l12.5-4.5L24 7Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/><path d="m39 7 .9 2.1L42 10l-2.1.9L39 13l-.9-2.1L36 10l2.1-.9L39 7ZM10 35l.8 1.7 1.7.8-1.7.8L10 40l-.8-1.7-1.7-.8 1.7-.8L10 35Z" fill="currentColor"/></svg>
    case 'users': return <svg {...common}><circle cx="21" cy="18" r="6" stroke="currentColor" strokeWidth="2.1"/><path d="M10 38c.8-6 4.5-9 11-9 2.8 0 5 .5 6.7 1.6" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/><circle cx="34" cy="28" r="4" stroke="currentColor" strokeWidth="2.1"/><path d="m36.5 31 4 4" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round"/></svg>
  }
}

function Brand(): ReactNode {
  return <div className="brand" aria-label="The Grid">
    <div className="brandMark">
      <svg viewBox="0 0 70 70" fill="none" aria-hidden="true">
        <defs><linearGradient id="gridLogoGradient" x1="10" y1="60" x2="60" y2="8" gradientUnits="userSpaceOnUse"><stop stopColor="#a246ff"/><stop offset="1" stopColor="#38b9ff"/></linearGradient></defs>
        <g stroke="url(#gridLogoGradient)" strokeWidth="3.2"><path d="M15 23 34 10l21 12-2 24-20 13-20-13z"/><path d="m15 23 18 16 22-17M34 10l-1 29m1 29V39m-21 7 21-7 20 7"/></g>
        <circle cx="15" cy="23" r="4.2" fill="#a246ff"/><circle cx="34" cy="10" r="4.2" fill="#8c4aff"/><circle cx="55" cy="22" r="4.2" fill="#3dbaff"/><circle cx="53" cy="46" r="4.2" fill="#5ca5ff"/><circle cx="33" cy="59" r="4.2" fill="#9d48ff"/><circle cx="13" cy="46" r="4.2" fill="#a246ff"/>
      </svg>
      <span>'he grid'</span>
    </div>
    <strong>The Grid</strong>
  </div>
}

function EmptyState({ icon, title, description }: { icon: IconName; title: string; description: string }): ReactNode {
  return <section className="emptyState">
    <div className="emptyIcon"><Icon name={icon} size={70} /></div>
    <h2>{title}</h2>
    <p>{description}</p>
  </section>
}

export default function Home(): ReactNode {
  const [tab, setTab] = useState<Tab>('Inicio')
  const [search, setSearch] = useState('')
  const [showComposer, setShowComposer] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [message, setMessage] = useState('')

  const notify = (text: string): void => {
    setMessage(text)
    window.setTimeout(() => setMessage(''), 2200)
  }

  const navigate = (next: Tab): void => {
    setTab(next)
    setSearch('')
  }

  const renderPage = (): ReactNode => {
    if (tab === 'Buscar') {
      return <div className="page searchPage">
        <h1>Buscar</h1>
        <label className="searchInput">
          <Icon name="search" size={42} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Buscar usuarios o hashtags" aria-label="Buscar usuarios o hashtags" />
        </label>
        <div className="searchTabs"><button className="active">Usuarios</button><button>Hashtags</button></div>
        <EmptyState icon="users" title="Buscá creadores" description="Escribí un @username para encontrar personas." />
      </div>
    }

    if (tab === 'Perfil') {
      return <div className="page profilePage">
        <h1>Perfil</h1>
        <div className="profileHero"><div className="profileAvatar">G</div><div><h2>Tu perfil</h2><p>@usuario</p></div><button onClick={() => notify('Edición de perfil disponible en la siguiente capa')}>Editar</button></div>
        <div className="profileStats"><div><strong>0</strong><span>Publicaciones</span></div><div><strong>0</strong><span>Seguidores</span></div><div><strong>0</strong><span>Siguiendo</span></div></div>
      </div>
    }

    const state = emptyStates[tab]
    return <div className={`page ${tab.toLowerCase()}`}>
      <div className="pageTitleRow"><h1>{tab}</h1>{(tab === 'Inicio' || tab === 'Mensajes') && <button className="addButton" onClick={() => setShowComposer(true)} aria-label={tab === 'Inicio' ? 'Crear publicación' : 'Nueva conversación'}><Icon name="plus" size={55} /></button>}</div>
      {tab === 'Inicio' && <div className="storyRow"><button className="story" onClick={() => setShowComposer(true)}><span className="storyRing"><Icon name="plus" size={52} /></span><span>Tu story</span></button></div>}
      <EmptyState {...state} />
    </div>
  }

  return <main className="app">
    <header className="topHeader">
      <Brand />
      <button className="notificationButton" onClick={() => setShowNotifications(true)} aria-label="Notificaciones"><Icon name="bell" size={50} /></button>
    </header>

    <div className="content">{renderPage()}</div>

    <nav className="bottomNav" aria-label="Navegación principal">
      {tabs.map((item) => <button key={item.id} className={tab === item.id ? 'active' : ''} onClick={() => navigate(item.id)}><Icon name={item.icon} size={54} /><span>{item.id}</span></button>)}
    </nav>

    {showComposer && <div className="overlay" role="presentation" onClick={() => setShowComposer(false)}><section className="actionSheet" role="dialog" aria-modal="true" aria-label="Crear" onClick={(event) => event.stopPropagation()}><span className="sheetHandle"/><h2>{tab === 'Mensajes' ? 'Nueva conversación' : 'Crear'}</h2><button onClick={() => { setShowComposer(false); notify('Compositor de publicación abierto') }}>Publicación</button><button onClick={() => { setShowComposer(false); notify('Selector de Pulse abierto') }}>Pulse</button><button onClick={() => { setShowComposer(false); notify('Grid Studio listo para transmitir') }}>Transmitir en vivo</button></section></div>}

    {showNotifications && <div className="overlay" role="presentation" onClick={() => setShowNotifications(false)}><section className="notificationSheet" role="dialog" aria-modal="true" aria-label="Notificaciones" onClick={(event) => event.stopPropagation()}><span className="sheetHandle"/><div className="sheetHeader"><h2>Notificaciones</h2><button onClick={() => setShowNotifications(false)}>Cerrar</button></div><EmptyState icon="bell" title="Sin notificaciones" description="Tus likes, comentarios, seguidores y menciones aparecerán aquí."/><button className="filterButton" onClick={() => notify('Filtros abiertos')}>Filtros</button></section></div>}

    {message && <div className="toast" role="status">{message}</div>}
  </main>
}
