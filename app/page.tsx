'use client'
import { useState } from 'react'

const tabs = ['Inicio','Pulse','Grid Studio','Gaming','Wallet']
const seed = [
  {name:'Alex Grid', handle:'@alex', text:'Bienvenidos a The Grid. Esta es la primera versión funcional.', time:'Ahora', likes:128},
  {name:'Mica Stream', handle:'@mica', text:'Grid Studio listo para conectar tu próxima transmisión.', time:'12 min', likes:64},
  {name:'Nexus Gaming', handle:'@nexus', text:'Tu actividad de gaming y Drops, en un solo lugar.', time:'31 min', likes:42},
]

export default function Home(){
 const [tab,setTab]=useState('Inicio'); const [posts,setPosts]=useState(seed); const [text,setText]=useState('')
 const publish=()=>{if(!text.trim())return; setPosts([{name:'Tú',handle:'@usuario',text:text.trim(),time:'Ahora',likes:0},...posts]);setText('')}
 return <main className="shell"><aside><div className="logo">THE<span>GRID</span></div><nav>{tabs.map(t=><button className={tab===t?'active':''} onClick={()=>setTab(t)} key={t}>{t}</button>)}</nav><button className="compose" onClick={()=>document.getElementById('composer')?.focus()}>+ Publicar</button></aside>
 <section className="content"><header><div><small>THE GRID</small><h1>{tab}</h1></div><div className="avatar">G</div></header>
 {tab==='Inicio' && <><div className="composer"><textarea id="composer" value={text} onChange={e=>setText(e.target.value)} placeholder="¿Qué está pasando en The Grid?"/><div className="row"><span>🌐 Público</span><button onClick={publish}>Publicar</button></div></div>{posts.map((p,i)=><article key={i}><div className="avatar small">{p.name[0]}</div><div className="post"><div><b>{p.name}</b> <span>{p.handle} · {p.time}</span></div><p>{p.text}</p><div className="actions"><span>♡ {p.likes}</span><span>◌ Comentar</span><span>↗ Compartir</span></div></div></article>)}</>}
 {tab!=='Inicio' && <div className="panel"><div className="icon">{tab==='Pulse'?'▶':tab==='Grid Studio'?'●':tab==='Gaming'?'⌁':'$'}</div><h2>{tab}</h2><p>Este módulo está integrado en la aplicación base. La interfaz funcional ya está preparada para conectar sus servicios reales.</p><button onClick={()=>setTab('Inicio')}>Volver al inicio</button></div>}
 </section><aside className="right"><div className="card"><small>ESTADO</small><h3>Todo operativo</h3><p>Frontend funcional · modo demo</p><div className="status"><i/> API UI lista</div><div className="status"><i/> Social feed listo</div><div className="status"><i/> Navegación lista</div></div><div className="card"><small>PRÓXIMO</small><h3>Grid Studio</h3><p>Conecta tu proveedor de streaming para activar emisión en vivo.</p></div></aside></main>
}