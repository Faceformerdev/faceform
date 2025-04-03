'use client'
import { ChevronDownIcon } from 'lucide-react'
import React from 'react'
import clsx from 'clsx'

const items = [
  {
    frage: 'Was ist FaceFormer® Therapie?',
    antwort:
      'FaceFormer Therapie ist eine ursachenorientierte Behandlungsmethode auf neurowissenschaftlicher Grundlage. Die innovative Methode nach Dr. Berndsen bietet zielgerichtete Übungen für Gesicht, Zunge, Mund, Kiefer und mehr. Die funktionelle Übungstherapie korrigiert Störungen essentieller Basisfunktionen hin zum natürlichen Zustand.',
  },
  {
    frage: 'Wo hilft FaceFormer® Therapie?',
    antwort:
      'FaceFormer Therapie wird bei zahlreichen Indikationen von einer Vielzahl medizinisch-therapeutischer Fachrichtungen angewendet. Der nachhaltige Behandlungserfolg bei funktionellen Störungen mit unterschiedlichsten Symptomen wie Schmerzen, Schwindel, Atem- und Hörproblemen, überzeugt Patienten und Behandler gleichermaßen.',
  },
  {
    frage: 'Wie wirkt FaceFormer® Therapie?',
    antwort:
      'FaceFormer Therapie zielt als ursachenorientierte Behandlungsmethode unmittelbar auf die Wurzel gesundheitlicher Beeinträchtigungen. Die Übungstherapie konzentriert sich auf essentielle Körperfunktionen wie Atmen und Schlucken und behandelt nachhaltig eine Vielzahl von Störungen samt der damit verbundenen Symptome.',
  },
  {
    frage: 'Was ist der FaceFormer®?',
    antwort:
      'Der FaceFormer ist ein neurophysiologisches Trainingsgerät, mit dem Anwender in kurzen Übungseinheiten essentielle Basisfunktionen wie Atmen und Schlucken trainieren. Das innovative Trainingsgerät wurde auf wissenschaftlicher Grundlage für die FaceFormer Therapie entwickelt und ist offiziell als Medizinprodukt zugelassen.',
  },
]

const AccordionItem = ({ frage, antwort }: { frage: string; antwort: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <div 
      className="mb-4 bg-white rounded-lg shadow-md overflow-hidden" 
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between p-4 cursor-pointer">
        <h3 className="text-lg font-medium text-gray-800">{frage}</h3>
        <ChevronDownIcon 
          className={clsx("w-5 h-5 text-green-600 transition-transform duration-300", {
            "transform rotate-180": isOpen
          })} 
        />
      </div>
      <div 
        className={clsx("overflow-hidden transition-all duration-300", {
          "max-h-0": !isOpen,
          "max-h-96": isOpen
        })}
      >
        <p className="p-4 text-gray-600 text-left border-t border-gray-100">
          {antwort}
        </p>
      </div>
    </div>
  )
}

export const FAQs = () => {
  return (
    <div className="bg-gradient-to-br from-[#81c642]-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-12">
          Häufig gestellte Fragen
        </h2>
        <div className="space-y-4">
          {items.map(({ frage, antwort }) => (
            <AccordionItem frage={frage} antwort={antwort} key={frage} />
          ))}
        </div>
      </div>
    </div>
  )
}