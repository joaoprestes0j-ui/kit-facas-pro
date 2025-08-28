import React, { useEffect, useMemo, useState } from 'react'
import { CheckCircle, Truck, Shield, CreditCard, MessageCircle, Clock } from 'lucide-react'

const CONFIG = {
  brand: 'Ofertas Prime',
  productName: 'Kit de Facas Profissional — 6 peças',
  priceFrom: 189.9,
  priceTo: 129.9,
  checkoutUrl: 'https://entrega.logzz.com.br/pay/memxl5dmm/1-kit-com-6-facas-promocao',
  whatsappUrl: 'https://wa.me/5541998798091?text=Ol%C3%A1!%20Quero%20agendar%20a%20entrega%20do%20Kit%20de%20Facas%20(pague%20na%20entrega).',
  heroImage: 'https://drive.google.com/uc?export=view&id=18dAG94MswljyW0se3wDfYWts7PXgZi7K',
  gallery: [
    'https://drive.google.com/uc?export=view&id=18dAG94MswljyW0se3wDfYWts7PXgZi7K',
    'https://drive.google.com/uc?export=view&id=18dAG94MswljyW0se3wDfYWts7PXgZi7K',
    'https://drive.google.com/uc?export=view&id=18dAG94MswljyW0se3wDfYWts7PXgZi7K',
  ],
} as const

function formatHMS(ms:number){ const x=Math.max(0,ms); const h=Math.floor(x/3_600_000); const m=Math.floor((x%3_600_000)/60_000); const s=Math.floor((x%60_000)/1_000); return [h,m,s].map(n=>String(n).padStart(2,'0')) }

export default function App(){
  const target = useMemo(()=>{const t=new Date(); t.setHours(23,59,59,999); return t.getTime()},[])
  const [left,setLeft] = useState(target - Date.now())
  useEffect(()=>{ const id=setInterval(()=>setLeft(target-Date.now()),1000); return ()=>clearInterval(id)},[target])
  const [hh,mm,ss] = formatHMS(left)

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <div className="sticky top-0 z-50 w-full bg-emerald-600 text-white text-sm md:text-base shadow">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-center gap-2 font-semibold">
          <CreditCard className="h-4 w-4" /><span>PAGUE NA ENTREGA</span><span className="opacity-80">•</span><Truck className="h-4 w-4" /><span>Frete grátis em regiões selecionadas</span>
        </div>
      </div>

      <header className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between">
        <div className="font-bold tracking-tight text-xl">{CONFIG.brand}</div>
        <a href={CONFIG.checkoutUrl} className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow hover:brightness-110">QUERO APROVEITAR A OFERTA</a>
      </header>

      <section className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-square overflow-hidden rounded-3xl shadow-lg">
          <img src={CONFIG.heroImage} alt={CONFIG.productName} className="h-full w-full object-cover"/>
        </div>
        <div>
          <div className="mb-3 text-xs uppercase tracking-widest text-emerald-700 font-semibold">Oferta exclusiva</div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">{CONFIG.productName}</h1>
          <p className="mt-3 text-neutral-700">Conjunto completo para o dia a dia: lâminas afiadas, acabamento premium e cabo ergonômico.</p>
          <div className="mt-5 flex items-end gap-4">
            <div>
              <div className="text-sm line-through text-neutral-500">de R$ {CONFIG.priceFrom.toFixed(2)}</div>
              <div className="text-4xl font-extrabold text-emerald-700">por R$ {CONFIG.priceTo.toFixed(2)}</div>
              <div className="text-sm text-neutral-600">Pague somente na entrega</div>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-2 text-sm text-neutral-600"><Clock className="h-4 w-4"/><span>Termina em</span></div>
              <div className="text-2xl font-bold tabular-nums">{hh}:{mm}:{ss}</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={CONFIG.checkoutUrl} className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-white font-semibold shadow hover:brightness-110 w-full sm:w-auto">QUERO APROVEITAR A OFERTA</a>
            <a href={CONFIG.whatsappUrl} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 px-6 py-3 font-semibold hover:bg-neutral-50 w-full sm:w-auto"><MessageCircle className="h-4 w-4"/> Tirar dúvidas no WhatsApp</a>
          </div>
        </div>
      </section>
    </div>
  )
}
