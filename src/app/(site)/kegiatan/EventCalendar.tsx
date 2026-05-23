'use client'

import { useState } from 'react'

type EventCategory = 'Kesehatan' | 'Olahraga' | 'Komunitas' | 'Kreatif' | 'Keagamaan' | 'Nasional'

interface CalEvent {
  date: number
  month: number
  year: number
  title: string
  category: EventCategory
  time: string
  location: string
}

const catColor: Record<EventCategory, string> = {
  Kesehatan: 'bg-blue-500',
  Olahraga: 'bg-green-500',
  Komunitas: 'bg-purple-500',
  Kreatif: 'bg-orange-500',
  Keagamaan: 'bg-amber-500',
  Nasional: 'bg-red-500',
}

const catBadge: Record<EventCategory, string> = {
  Kesehatan: 'bg-blue-100 text-blue-700',
  Olahraga: 'bg-green-100 text-green-700',
  Komunitas: 'bg-purple-100 text-purple-700',
  Kreatif: 'bg-orange-100 text-orange-700',
  Keagamaan: 'bg-amber-100 text-amber-700',
  Nasional: 'bg-red-100 text-red-700',
}

const events: CalEvent[] = [
  { date: 1, month: 5, year: 2026, title: 'Senam Pagi Rutin', category: 'Olahraga', time: '06.00–07.30', location: 'Lapangan RW 44' },
  { date: 2, month: 5, year: 2026, title: 'Posyandu Bulan Juni', category: 'Kesehatan', time: '08.00–12.00', location: 'GSG Coatesville' },
  { date: 5, month: 5, year: 2026, title: 'Workshop Memasak Sehat', category: 'Kreatif', time: '09.00–12.00', location: 'GSG Coatesville' },
  { date: 8, month: 5, year: 2026, title: 'Senam Pagi Rutin', category: 'Olahraga', time: '06.00–07.30', location: 'Lapangan RW 44' },
  { date: 8, month: 5, year: 2026, title: 'CTB Sunday Ride', category: 'Komunitas', time: '06.30', location: 'Meeting Point Pos 1' },
  { date: 12, month: 5, year: 2026, title: 'Pengajian Rutin', category: 'Keagamaan', time: '19.30–21.00', location: 'Masjid Cluster' },
  { date: 15, month: 5, year: 2026, title: 'Senam Pagi Rutin', category: 'Olahraga', time: '06.00–07.30', location: 'Lapangan RW 44' },
  { date: 15, month: 5, year: 2026, title: 'Rapat Warga RW 44', category: 'Komunitas', time: '09.00–11.00', location: 'Pos Sekuriti' },
  { date: 17, month: 5, year: 2026, title: 'Kunjungan Rumah Lansia', category: 'Kesehatan', time: '09.00–12.00', location: 'Area Blok A-C' },
  { date: 20, month: 5, year: 2026, title: 'Line Dance Bersama', category: 'Kreatif', time: '07.00–08.30', location: 'Lapangan RW 44' },
  { date: 22, month: 5, year: 2026, title: 'Senam Pagi Rutin', category: 'Olahraga', time: '06.00–07.30', location: 'Lapangan RW 44' },
  { date: 25, month: 5, year: 2026, title: 'CFA Hiking Gunung Pancar', category: 'Komunitas', time: '05.00', location: 'Gerbang RW 44' },
  { date: 26, month: 5, year: 2026, title: 'Ibadah Minggu Bersama', category: 'Keagamaan', time: '08.00–10.00', location: 'GSG Coatesville' },
  { date: 29, month: 5, year: 2026, title: 'Senam Pagi Rutin', category: 'Olahraga', time: '06.00–07.30', location: 'Lapangan RW 44' },
  { date: 30, month: 5, year: 2026, title: 'Imunisasi Susulan', category: 'Kesehatan', time: '09.00–11.00', location: 'Pos Posyandu' },
  // July
  { date: 6, month: 6, year: 2026, title: 'Posyandu Bulan Juli', category: 'Kesehatan', time: '08.00–12.00', location: 'GSG Coatesville' },
  { date: 17, month: 6, year: 2026, title: 'HUT Kemerdekaan RI Persiapan', category: 'Nasional', time: '19.00', location: 'Lapangan Utama' },
]

const MONTHS = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const DAYS = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

export default function EventCalendar() {
  const [currentMonth, setCurrentMonth] = useState(5) // 0-indexed → Juni 2026 = 5
  const [currentYear, setCurrentYear] = useState(2026)
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [activeFilter, setActiveFilter] = useState<EventCategory | 'Semua'>('Semua')

  const firstDay = new Date(currentYear, currentMonth, 1).getDay()
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  const monthEvents = events.filter(
    (e) => e.month - 1 === currentMonth && e.year === currentYear
  )

  const prevMonth = () => {
    if (currentMonth === 0) { setCurrentMonth(11); setCurrentYear((y) => y - 1) }
    else setCurrentMonth((m) => m - 1)
    setSelectedDate(null)
  }

  const nextMonth = () => {
    if (currentMonth === 11) { setCurrentMonth(0); setCurrentYear((y) => y + 1) }
    else setCurrentMonth((m) => m + 1)
    setSelectedDate(null)
  }

  const getDayEvents = (day: number) =>
    monthEvents.filter((e) => e.date === day)

  const selectedEvents = selectedDate ? getDayEvents(selectedDate) : null

  const filteredEvents = (activeFilter === 'Semua' ? monthEvents : monthEvents.filter((e) => e.category === activeFilter))
    .sort((a, b) => a.date - b.date)

  const categories: (EventCategory | 'Semua')[] = ['Semua', 'Kesehatan', 'Olahraga', 'Komunitas', 'Kreatif', 'Keagamaan', 'Nasional']

  return (
    <div className="bg-white rounded-3xl shadow-card-lg border border-border overflow-hidden">
      {/* Header */}
      <div className="bg-primary px-8 py-5 flex items-center justify-between">
        <div>
          <p className="text-white/60 text-xs font-semibold uppercase tracking-wider">Kalender Kegiatan</p>
          <h3 className="text-white text-xl font-serif font-bold">{MONTHS[currentMonth]} {currentYear}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prevMonth}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            ‹
          </button>
          <button
            onClick={nextMonth}
            className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3">
        {/* Calendar Grid */}
        <div className="lg:col-span-2 p-6 border-r border-border">
          {/* Day headers */}
          <div className="grid grid-cols-7 mb-3">
            {DAYS.map((d) => (
              <div key={d} className="text-center text-xs font-bold text-muted py-2">{d}</div>
            ))}
          </div>

          {/* Date grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const dayEvents = getDayEvents(day)
              const isSelected = selectedDate === day
              const isToday = day === 23 && currentMonth === 4 && currentYear === 2026

              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(isSelected ? null : day)}
                  className={`relative aspect-square rounded-xl flex flex-col items-center justify-start pt-1.5 text-sm transition-all duration-200 ${
                    isSelected
                      ? 'bg-primary text-white shadow-card'
                      : isToday
                      ? 'bg-accent-pale text-primary font-bold'
                      : 'hover:bg-bg text-ink'
                  }`}
                >
                  <span className={`text-xs font-semibold leading-none ${isSelected ? 'text-white' : ''}`}>{day}</span>
                  {dayEvents.length > 0 && (
                    <div className="flex gap-0.5 mt-1 flex-wrap justify-center px-0.5">
                      {dayEvents.slice(0, 3).map((e, j) => (
                        <span
                          key={j}
                          className={`w-1.5 h-1.5 rounded-full ${catColor[e.category]} ${isSelected ? 'opacity-80' : ''}`}
                        />
                      ))}
                    </div>
                  )}
                </button>
              )
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap gap-3 pt-4 border-t border-border">
            {(Object.keys(catColor) as EventCategory[]).map((cat) => (
              <div key={cat} className="flex items-center gap-1.5 text-xs text-muted">
                <span className={`w-2 h-2 rounded-full ${catColor[cat]}`} />
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Event List Panel */}
        <div className="p-6 flex flex-col">
          <div className="mb-4">
            <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">
              {selectedDate ? `Agenda ${selectedDate} ${MONTHS[currentMonth]}` : 'Agenda Bulan Ini'}
            </p>
            {selectedDate && (
              <button
                onClick={() => setSelectedDate(null)}
                className="text-xs text-muted hover:text-primary transition-colors"
              >
                ← Lihat semua
              </button>
            )}
          </div>

          {/* Filter chips (only for all-month view) */}
          {!selectedDate && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-[0.65rem] font-bold px-2.5 py-1 rounded-full transition-all ${
                    activeFilter === cat
                      ? 'bg-primary text-white'
                      : 'bg-bg text-muted hover:bg-accent-pale'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <div className="flex-1 overflow-y-auto max-h-72 space-y-2 pr-1">
            {(selectedDate ? (selectedEvents || []) : filteredEvents).length === 0 ? (
              <div className="text-center py-8">
                <span className="text-3xl">📅</span>
                <p className="text-xs text-muted mt-2">Tidak ada agenda</p>
              </div>
            ) : (
              (selectedDate ? (selectedEvents || []) : filteredEvents).map((e, i) => (
                <div
                  key={i}
                  className="bg-bg rounded-xl p-3 border border-border/40 hover:border-primary/20 transition-all"
                >
                  <div className="flex items-start gap-2">
                    <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${catColor[e.category]}`} />
                    <div className="flex-1 min-w-0">
                      {!selectedDate && (
                        <p className="text-[0.65rem] font-bold text-muted mb-0.5">
                          {e.date} {MONTHS[currentMonth]}
                        </p>
                      )}
                      <p className="text-xs font-semibold text-ink leading-tight">{e.title}</p>
                      <p className="text-[0.65rem] text-muted mt-1">🕒 {e.time} • 📍 {e.location}</p>
                    </div>
                    <span className={`text-[0.55rem] font-bold px-1.5 py-0.5 rounded-md flex-shrink-0 ${catBadge[e.category]}`}>
                      {e.category}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <p className="text-xs text-muted text-center">
              {monthEvents.length} agenda di bulan ini
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
