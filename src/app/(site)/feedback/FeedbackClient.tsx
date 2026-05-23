'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import AnimateOnScroll from '@/components/ui/AnimateOnScroll'

type FormState = 'idle' | 'submitting' | 'success'

interface Toast {
  id: string
  type: 'success' | 'error'
  title: string
  message: string
}

function generateTicketId(prefix: string) {
  const num = Math.floor(1000 + Math.random() * 9000)
  return `${prefix}-${num}`
}

function ToastContainer({ toasts, onDismiss }: { toasts: Toast[]; onDismiss: (id: string) => void }) {
  if (toasts.length === 0) return null
  return (
    <div className="fixed top-24 right-4 z-[2000] flex flex-col gap-3 max-w-sm w-full">
      {toasts.map((t) => (
        <div
          key={t.id}
          className={`flex items-start gap-3 rounded-2xl shadow-card-lg border p-4 animate-fade-up ${
            t.type === 'success'
              ? 'bg-white border-green-200'
              : 'bg-white border-red-200'
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm ${
              t.type === 'success' ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            {t.type === 'success' ? '✓' : '!'}
          </div>
          <div className="flex-1">
            <p className={`text-sm font-bold ${t.type === 'success' ? 'text-green-800' : 'text-red-800'}`}>
              {t.title}
            </p>
            <p className="text-xs text-muted mt-0.5 leading-relaxed">{t.message}</p>
          </div>
          <button
            onClick={() => onDismiss(t.id)}
            className="text-muted hover:text-ink transition-colors text-xs leading-none mt-0.5"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  )
}

interface FeedbackFormState {
  nama: string
  kategori: string
  pesan: string
  anonymous: boolean
}

interface PengaduanFormState {
  nama: string
  hp: string
  kategori: string
  lokasi: string
  deskripsi: string
  anonymous: boolean
}

function FeedbackForm({ onToast }: { onToast: (t: Toast) => void }) {
  const [state, setState] = useState<FeedbackFormState>({
    nama: '', kategori: '', pesan: '', anonymous: false,
  })
  const [formState, setFormState] = useState<FormState>('idle')
  const [lastTicket, setLastTicket] = useState<string | null>(null)
  const [errors, setErrors] = useState<Partial<FeedbackFormState>>({})

  const validate = () => {
    const e: Partial<FeedbackFormState> = {}
    if (!state.anonymous && !state.nama.trim()) e.nama = 'Nama wajib diisi'
    if (!state.kategori) e.kategori = 'Pilih kategori'
    if (!state.pesan.trim() || state.pesan.length < 10) e.pesan = 'Pesan minimal 10 karakter'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    await new Promise((r) => setTimeout(r, 1200))
    const ticket = generateTicketId('FBK')
    setLastTicket(ticket)
    setFormState('success')
    onToast({
      id: Date.now().toString(),
      type: 'success',
      title: 'Feedback terkirim!',
      message: `No. Tiket: ${ticket}. Terima kasih atas masukan Anda, kami akan menindaklanjutinya.`,
    })
  }

  const handleReset = () => {
    setState({ nama: '', kategori: '', pesan: '', anonymous: false })
    setErrors({})
    setFormState('idle')
    setLastTicket(null)
  }

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">✓</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">Feedback Terkirim!</h3>
        <p className="text-sm text-muted mb-1">No. Tiket: <strong className="text-primary">{lastTicket}</strong></p>
        <p className="text-xs text-muted max-w-xs mb-6">
          Masukan Anda telah diterima oleh pengurus RW 44. Kami akan menindaklanjuti dalam 1-3 hari kerja.
        </p>
        <button onClick={handleReset} className="btn-primary text-sm px-6 py-2">
          Kirim Feedback Lagi
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="flex items-center gap-2 cursor-pointer mb-1 select-none">
        <div
          onClick={() => setState((s) => ({ ...s, anonymous: !s.anonymous, nama: '' }))}
          className={`w-9 h-5 rounded-full transition-colors relative flex-shrink-0 ${
            state.anonymous ? 'bg-primary' : 'bg-border'
          }`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
              state.anonymous ? 'translate-x-4' : 'translate-x-0.5'
            }`}
          />
        </div>
        <span className="text-xs text-muted">Kirim anonim</span>
      </label>

      {!state.anonymous && (
        <div>
          <input
            type="text"
            placeholder="Nama Anda"
            value={state.nama}
            onChange={(e) => setState((s) => ({ ...s, nama: e.target.value }))}
            className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-primary-mid transition-colors ${
              errors.nama ? 'border-red-400 bg-red-50' : 'border-border'
            }`}
          />
          {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama}</p>}
        </div>
      )}

      <div>
        <select
          value={state.kategori}
          onChange={(e) => setState((s) => ({ ...s, kategori: e.target.value }))}
          className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-primary-mid bg-white transition-colors ${
            errors.kategori ? 'border-red-400 bg-red-50' : 'border-border'
          }`}
        >
          <option value="">Pilih kategori feedback...</option>
          <option>Program Posyandu</option>
          <option>Infrastruktur</option>
          <option>Keamanan</option>
          <option>Kegiatan Komunitas</option>
          <option>Lainnya</option>
        </select>
        {errors.kategori && <p className="text-red-500 text-xs mt-1">{errors.kategori}</p>}
      </div>

      <div>
        <textarea
          rows={4}
          placeholder="Tuliskan masukan atau saran Anda... (min. 10 karakter)"
          value={state.pesan}
          onChange={(e) => setState((s) => ({ ...s, pesan: e.target.value }))}
          className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-primary-mid resize-none transition-colors ${
            errors.pesan ? 'border-red-400 bg-red-50' : 'border-border'
          }`}
        />
        <div className="flex items-center justify-between mt-1">
          {errors.pesan ? (
            <p className="text-red-500 text-xs">{errors.pesan}</p>
          ) : <span />}
          <span className="text-xs text-muted">{state.pesan.length} karakter</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === 'submitting' ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Mengirim...
          </span>
        ) : 'Kirim Feedback'}
      </button>
    </form>
  )
}

function PengaduanForm({ onToast }: { onToast: (t: Toast) => void }) {
  const [state, setState] = useState<PengaduanFormState>({
    nama: '', hp: '', kategori: '', lokasi: '', deskripsi: '', anonymous: false,
  })
  const [formState, setFormState] = useState<FormState>('idle')
  const [lastTicket, setLastTicket] = useState<string | null>(null)
  const [errors, setErrors] = useState<Partial<PengaduanFormState>>({})

  const validate = () => {
    const e: Partial<PengaduanFormState> = {}
    if (!state.anonymous && !state.nama.trim()) e.nama = 'Nama wajib diisi'
    if (!state.anonymous && !state.hp.trim()) e.hp = 'No. HP wajib diisi'
    if (!state.kategori) e.kategori = 'Pilih jenis pengaduan'
    if (!state.deskripsi.trim() || state.deskripsi.length < 20) e.deskripsi = 'Deskripsi minimal 20 karakter'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setFormState('submitting')
    await new Promise((r) => setTimeout(r, 1500))
    const ticket = generateTicketId('TKT')
    setLastTicket(ticket)
    setFormState('success')
    onToast({
      id: Date.now().toString(),
      type: 'success',
      title: 'Pengaduan diterima!',
      message: `No. Tiket: ${ticket}. Pengaduan Anda akan ditindaklanjuti dalam 2×24 jam.`,
    })
  }

  const handleReset = () => {
    setState({ nama: '', hp: '', kategori: '', lokasi: '', deskripsi: '', anonymous: false })
    setErrors({})
    setFormState('idle')
    setLastTicket(null)
  }

  if (formState === 'success') {
    return (
      <div className="flex flex-col items-center text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl mb-4">✓</div>
        <h3 className="text-lg font-bold text-green-800 mb-2">Pengaduan Diterima!</h3>
        <p className="text-sm text-muted mb-1">No. Tiket: <strong className="text-primary">{lastTicket}</strong></p>
        <p className="text-xs text-muted max-w-xs mb-2">Simpan nomor tiket ini untuk memantau status pengaduan Anda.</p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 mb-6 text-left w-full">
          <p className="text-xs font-bold text-yellow-800 mb-1">Status saat ini: <span className="bg-yellow-200 px-2 py-0.5 rounded-md">Menunggu Tinjauan</span></p>
          <p className="text-[0.7rem] text-yellow-700">Estimasi respon: 2×24 jam kerja</p>
        </div>
        <button onClick={handleReset} className="btn-primary text-sm px-6 py-2">
          Buat Pengaduan Baru
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <label className="flex items-center gap-2 cursor-pointer mb-1 select-none">
        <div
          onClick={() => setState((s) => ({ ...s, anonymous: !s.anonymous, nama: '', hp: '' }))}
          className={`w-9 h-5 rounded-full transition-colors relative flex-shrink-0 ${
            state.anonymous ? 'bg-primary' : 'bg-border'
          }`}
        >
          <span
            className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform ${
              state.anonymous ? 'translate-x-4' : 'translate-x-0.5'
            }`}
          />
        </div>
        <span className="text-xs text-muted">Kirim anonim (tanpa identitas)</span>
      </label>

      {!state.anonymous && (
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              placeholder="Nama Anda"
              value={state.nama}
              onChange={(e) => setState((s) => ({ ...s, nama: e.target.value }))}
              className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-primary-mid transition-colors ${
                errors.nama ? 'border-red-400 bg-red-50' : 'border-border'
              }`}
            />
            {errors.nama && <p className="text-red-500 text-xs mt-1">{errors.nama}</p>}
          </div>
          <div>
            <input
              type="tel"
              placeholder="No. HP / WhatsApp"
              value={state.hp}
              onChange={(e) => setState((s) => ({ ...s, hp: e.target.value }))}
              className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-primary-mid transition-colors ${
                errors.hp ? 'border-red-400 bg-red-50' : 'border-border'
              }`}
            />
            {errors.hp && <p className="text-red-500 text-xs mt-1">{errors.hp}</p>}
          </div>
        </div>
      )}

      <div>
        <select
          value={state.kategori}
          onChange={(e) => setState((s) => ({ ...s, kategori: e.target.value }))}
          className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-primary-mid bg-white transition-colors ${
            errors.kategori ? 'border-red-400 bg-red-50' : 'border-border'
          }`}
        >
          <option value="">Pilih jenis pengaduan...</option>
          <option>Infrastruktur Rusak</option>
          <option>Keamanan & Ketertiban</option>
          <option>Kebersihan Lingkungan</option>
          <option>Gangguan Kebisingan</option>
          <option>Fasilitas Posyandu</option>
          <option>Lainnya</option>
        </select>
        {errors.kategori && <p className="text-red-500 text-xs mt-1">{errors.kategori}</p>}
      </div>

      <input
        type="text"
        placeholder="Lokasi kejadian (opsional, misal: Blok A, dekat pos sekuriti)"
        value={state.lokasi}
        onChange={(e) => setState((s) => ({ ...s, lokasi: e.target.value }))}
        className="w-full px-4 py-3 text-sm rounded-xl border border-border focus:outline-none focus:border-primary-mid transition-colors"
      />

      <div>
        <textarea
          rows={4}
          placeholder="Deskripsikan masalah secara detail... (min. 20 karakter)"
          value={state.deskripsi}
          onChange={(e) => setState((s) => ({ ...s, deskripsi: e.target.value }))}
          className={`w-full px-4 py-3 text-sm rounded-xl border focus:outline-none focus:border-primary-mid resize-none transition-colors ${
            errors.deskripsi ? 'border-red-400 bg-red-50' : 'border-border'
          }`}
        />
        <div className="flex items-center justify-between mt-1">
          {errors.deskripsi ? (
            <p className="text-red-500 text-xs">{errors.deskripsi}</p>
          ) : <span />}
          <span className="text-xs text-muted">{state.deskripsi.length} karakter</span>
        </div>
      </div>

      <button
        type="submit"
        disabled={formState === 'submitting'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === 'submitting' ? (
          <span className="flex items-center gap-2">
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Mengirim...
          </span>
        ) : 'Kirim Pengaduan'}
      </button>
    </form>
  )
}

const recentTickets = [
  { id: 'TKT-3842', status: 'Selesai', kategori: 'Infrastruktur Rusak', tgl: '18 Mei 2026', progress: 100 },
  { id: 'TKT-3901', status: 'Diproses', kategori: 'Kebersihan Lingkungan', tgl: '21 Mei 2026', progress: 60 },
  { id: 'FBK-2217', status: 'Ditinjau', kategori: 'Program Posyandu', tgl: '22 Mei 2026', progress: 30 },
]

const statusColor: Record<string, string> = {
  Selesai: 'bg-green-100 text-green-700',
  Diproses: 'bg-blue-100 text-blue-700',
  Ditinjau: 'bg-yellow-100 text-yellow-700',
}

export default function FeedbackClient() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = (t: Toast) => {
    setToasts((prev) => [...prev, t])
    setTimeout(() => setToasts((prev) => prev.filter((x) => x.id !== t.id)), 6000)
  }

  const dismissToast = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id))

  return (
    <>
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      <section className="section bg-bg">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Feedback */}
            <AnimateOnScroll>
              <div className="bg-white rounded-3xl p-8 shadow-card-lg flex flex-col h-full">
                <div className="text-4xl mb-4">💬</div>
                <div className="section-tag mb-2">Feedback Umum</div>
                <h3 className="text-xl mb-3">Berikan Masukan & Saran</h3>
                <p className="text-sm mb-6 flex-1">
                  Bantu kami meningkatkan layanan dan program komunitas RW 44 dengan masukan yang konstruktif.
                </p>
                <FeedbackForm onToast={addToast} />
              </div>
            </AnimateOnScroll>

            {/* Pengaduan */}
            <AnimateOnScroll delay={150}>
              <div className="bg-white rounded-3xl p-8 shadow-card-lg flex flex-col h-full">
                <div className="text-4xl mb-4">🚨</div>
                <div className="section-tag mb-2">Pengaduan</div>
                <h3 className="text-xl mb-3">Laporkan Masalah</h3>
                <p className="text-sm mb-6 flex-1">
                  Laporkan masalah infrastruktur, keamanan, atau permasalahan komunitas lainnya. Pengaduan Anda akan ditindaklanjuti.
                </p>
                <PengaduanForm onToast={addToast} />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Status Tiket Terbaru */}
          <AnimateOnScroll delay={200}>
            <div className="bg-white rounded-3xl p-8 shadow-card border border-border/40 mb-6">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-bold text-ink">Riwayat Pengaduan Terbaru</h3>
                <span className="text-xs text-muted">Contoh status tiket</span>
              </div>
              <div className="space-y-3">
                {recentTickets.map((t, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-bg rounded-2xl border border-border/40">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary">{t.id}</span>
                        <span className={`text-[0.6rem] font-bold px-2 py-0.5 rounded-md ${statusColor[t.status]}`}>{t.status}</span>
                      </div>
                      <p className="text-xs text-muted truncate">{t.kategori} • {t.tgl}</p>
                      <div className="mt-2 h-1.5 bg-border rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-700"
                          style={{ width: `${t.progress}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-muted">{t.progress}%</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-primary rounded-2xl p-6 text-white flex flex-col md:flex-row items-center gap-5 text-center md:text-left">
              <div className="text-4xl">📞</div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Butuh Respon Cepat?</h4>
                <p className="text-white/65 text-sm">Untuk keadaan darurat, hubungi langsung pengurus RW 44 atau pos sekuriti Coatesville.</p>
              </div>
              <Link href="/kontak" className="btn-primary flex-shrink-0">Lihat Kontak Darurat</Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  )
}
