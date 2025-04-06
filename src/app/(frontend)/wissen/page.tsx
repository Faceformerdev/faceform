'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { FaYoutube, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'

export default function WissenPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const applications = {
    'Neurologische Anwendungen': [
      'Schwindel, Meniérsche Krankheit und Neuritis vestibularis',
      'Kopfschmerzen und Migräne',
      'Aktivierung von Hirnnervenfunktionen',
      'Störungen von Kopfbalance und Körperstatik',
      'Neurologische Erkrankungen, degenerative Prozesse',
      'Lähmungen an Mund oder Gesicht z.B. nach Schlaganfall',
    ],
    'Atemwegs- und Schlafstörungen': [
      'Schnarchen und nächtliche Atemaussetzer (Schlafapnoe)',
      'Atemstörungen und Asthma',
      'Umstellung von Mundatmung auf natürliche Nasenatmung',
    ],
    'Kiefer- und Zahnmedizin': [
      'Zahnfehlstellungen und Kieferanomalien',
      'Zähneknirschen und Zähnepressen (Bruxismus)',
      'Zahnprothetik und Zahnimplantate',
      'CMD (Craniomanibuläre Dysfunktion)',
      'Kiefergelenksstörungen',
    ],
    'Funktionelle Störungen': [
      'Schmerzen in der Region von Kopf, Gesicht, Nacken und Rücken',
      'Schluckstörungen (Dysphagien)',
      'Zungenfehlfunktionen',
      'Gestörte Kaufunktionen',
      'Funktionell bedingte Sprach-, Sprech- und Redeflussstörungen',
    ],
    'Weitere Anwendungen': [
      'Gestörte Speichelbildung, Einfluss auf Stoffwechsel',
      'Diabetes und Reflux',
      'Funktionelle Kosmetik',
      'Faltenbildung im Gesichts-/Halsbereich entgegenwirken',
      'Abgewöhnen von Schnuller, Daumenlutschen, Lippenbeißen etc.',
      'Behinderungen und Syndrome',
      'Vor und nach Operationen an Gesicht, Kiefer oder Zunge',
      'Druckausgleichprobleme im Mittelohr',
      'Hörsturz und Tinnitus',
    ],
  }

  const medicalFields = {
    'Medizinische Fachrichtungen': [
      'Zahnmedizin',
      'Kieferorthopädie',
      'HNO',
      'Neurologie',
      'Lungenheilkunde',
      'Schlafmedizin',
      'Kinderheilkunde, Pädiatrie',
      'Allgemeinmedizin',
    ],
    'Therapeutische Fachrichtungen': [
      'Orthopädie',
      'Osteopathie',
      'Naturheilkunde',
      'Logopädie',
      'Physiotherapie',
      'Rehabilitation',
    ],
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_50%_100%_at_bottom_left,#3CB371a75,#EAEEFE_170%)]"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#81c642] text-transparent bg-clip-text text-center">
            FaceFormer® Therapie
          </h1>
          <p className="text-lg md:text-xl text-black tracking-tight mt-6 text-center max-w-3xl mx-auto">
            Eine funktionelle Behandlungsmethode auf neurophysiologischer Grundlage
          </p>
        </motion.div>
      </section>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-20">
        {/* Introduction Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Die FaceFormer® Therapie</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Die FaceFormer Therapie ist eine funktionelle Behandlungsmethode auf
                neurophysiologischer Grundlage. Das innovative Behandlungsverfahren wird erfolgreich
                bei einer Vielzahl von Beschwerden in der Region von Gesicht, Mund, Kiefer, Rachen,
                Hals und Rücken angewandt. Dabei verfolgt die Methode einen ursachenorientierten
                Ansatz.
              </p>
              <p className="text-lg">
                Die Therapiemethode wurde gegen Ende der 1990er Jahre von Dr. Klaus Berndsen und
                Sabine Berndsen entwickelt. Die beiden neurowissenschaftlich orientierten
                Rehabilitologen und Sprachtherapeuten erarbeiteten für ihre Patienten ein
                wirkungsvolles Übungsprogramm, das auf aktuellen Erkenntnissen der Gehirnforschung
                und umfangreichen Erfahrungen aus der therapeutischen Praxis fußt.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#81c642]/10 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Das Medizinprodukt</h3>
              <p className="text-lg mb-4">
                Der FaceFormer ist das Trainingsgerät, mit dem die Anwender die einfach gehaltenen
                Übungen ausführen. Der FaceFormer wird aus einem hochwertigen, für medizinische
                Zwecke zugelassenen Silikonelastomer hergestellt. Material und Form des
                Trainingsgerätes sind ideal auf die dabei einwirkenden Kräfte optimiert.
              </p>
              <p className="text-lg">
                1998 wurde der FaceFormer für 20 Jahre patentrechtlich geschützt. Seit seiner
                Markteinführung im gleichen Jahr ist das Trainingsgerät auch offiziell als
                Medizinprodukt zugelassen.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Applications Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Anwendungsgebiete</h2>
          <div className="space-y-4">
            {Object.entries(applications).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg border border-[#81c642]/20 overflow-hidden"
              >
                <button
                  onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-[#81c642]/5 transition-colors"
                >
                  <h3 className="text-xl font-semibold">{category}</h3>
                  <svg
                    className={`w-6 h-6 transform transition-transform ${
                      activeCategory === category ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {activeCategory === category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 bg-[#81c642]/5"
                  >
                    <ul className="space-y-2">
                      {items.map((item) => (
                        <li key={item} className="text-lg">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Medical Fields Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Fachrichtungen</h2>
          <p className="text-lg mb-8">
            Die FaceFormer Therapiemethode ergänzt mittlerweile auf ideale Weise das
            Methodenrepertoire von Behandlern aus den verschiedensten medizinischen und
            therapeutischen Fachrichtungen.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(medicalFields).map(([category, items]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#81c642]/10 p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-lg">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Therapy Approach Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ursachenorientierter Ansatz</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#81c642]/10 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Ursachentherapie</h3>
              <p className="text-lg mb-4">
                Ursachentherapien zielen auf den tatsächlichen Auslöser gesundheitlicher
                Beeinträchtigungen. Die unmittelbare Behandlung an der Problemquelle eliminiert die
                davon hervorgerufenen Störungen auf nachhaltige Weise. Mit Besserung der
                eigentlichen Krankheitsursache verschwinden auch die damit einhergehenden
                Beschwerden.
              </p>
              <p className="text-lg">
                Die FaceFormer Therapie konzentriert sich auf die unmittelbaren Ursachen von
                Störungen beim Atmen und Schlucken. Sie trainiert die natürlichen Grundfunktionen
                durch ein einfach auszuführendes Übungsprogramm.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-[#81c642]/20"
            >
              <h3 className="text-2xl font-bold mb-4">Symptombehandlung</h3>
              <p className="text-lg">
                Bei reinen Symptomtherapien wird der ursächliche Zusammenhang zwischen dem
                Krankheitsauslöser und seinen Auswirkungen auf die Gesundheit meist kaum
                berücksichtigt. Entsprechend bleibt der Erfolg solcher Maßnahmen in der Wirkung
                meist überschaubar und von kurzer Dauer. Oft kehren die Symptome sogar schwerer
                zurück als zuvor oder vollkommen neue Beschwerden treten hinzu.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Training Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Neurophysiologische FaceFormer® Trainingstherapie
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg mb-4">
                Anwender der neurophysiologischen FaceFormer Übungstherapie führen zwei- bis dreimal
                täglich mit dem FaceFormer einfache Übungen aus. Ein Übungsdurchgang nimmt nur etwa
                10 Minuten in Anspruch. Dementsprechend ist der Trainingsaufwand vergleichsweise
                gering.
              </p>
              <p className="text-lg">
                Im Fokus der Trainingstherapie steht die Korrektur der lebensnotwendigen
                Grundfunktionen Atmen und Schlucken. Bei vielen Menschen weichen diese mitunter
                schon seit Kindheit und Jugend vom natürlichen Ablauf ab. Konsequentes FaceFormer
                Training korrigiert die Funktionsabläufe so, wie die Natur es vorgesehen hat.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#81c642]/10 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Wesentliche Merkmale</h3>
              <ul className="space-y-2 text-lg">
                <li>• Übungstherapie auf neurowissenschaftlicher Grundlage</li>
                <li>• Anregung von Hirnbotenstoffen und Nervenfunktionen</li>
                <li>• Neuprägung natürlicher Bewegungsabläufe und Haltungen</li>
                <li>• Ursachenorientiertes Behandlungsverfahren</li>
                <li>• Rückbildung von Symptomen durch Ursachenbehandlung</li>
                <li>• Korrektur fehlerhafter Abläufe elementarer Grundfunktionen</li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Social Media Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Folgen Sie uns</h2>
          <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
            Bleiben Sie auf dem Laufenden mit den neuesten Entwicklungen, Tipps und
            Erfolgsgeschichten der FaceFormer® Therapie.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.a
              href="https://www.youtube.com/@DrBerndsenmedical"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF0000] p-8 rounded-lg text-white flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaYoutube className="w-12 h-12" />
              <span className="text-xl font-semibold">YouTube</span>
              <span className="text-sm opacity-90">@DrBerndsenmedical</span>
            </motion.a>

            <motion.a
              href="https://www.instagram.com/faceformer/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] p-8 rounded-lg text-white flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaInstagram className="w-12 h-12" />
              <span className="text-xl font-semibold">Instagram</span>
              <span className="text-sm opacity-90">@faceformer</span>
            </motion.a>

            <motion.a
              href="https://www.tiktok.com/@mindtohealth"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black p-8 rounded-lg text-white flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaTiktok className="w-12 h-12" />
              <span className="text-xl font-semibold">TikTok</span>
              <span className="text-sm opacity-90">@mindtohealth</span>
            </motion.a>

            <motion.a
              href="https://www.facebook.com/FaceFormer/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1877F2] p-8 rounded-lg text-white flex flex-col items-center justify-center gap-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FaFacebook className="w-12 h-12" />
              <span className="text-xl font-semibold">Facebook</span>
              <span className="text-sm opacity-90">@FaceFormer</span>
            </motion.a>
          </div>
        </motion.section>
      </div>
    </div>
  )
}
