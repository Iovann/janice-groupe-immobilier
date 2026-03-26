"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { AlertTriangle, RefreshCcw, Home, MessageCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error for observability
    console.error("Application runtime error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-slate-50/50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-2xl border border-[#E74C3C]/10 text-center space-y-8"
      >
        <div className="flex justify-center flex-col items-center gap-4">
          <Image
            src="/logo.webp"
            alt="Logo Janice Groupe"
            width={100}
            height={100}
            className="h-16 w-auto grayscale opacity-50 mb-2"
          />
          <div className="bg-[#E74C3C]/10 p-5 rounded-full ring-8 ring-[#E74C3C]/5">
            <AlertTriangle size={48} className="text-[#E74C3C]" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            Oups, une erreur est survenue
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px] mx-auto">
            Désolé, une erreur inattendue s'est produite. Nos équipes ont été notifiées.
          </p>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="flex items-center justify-center gap-2 w-full py-4 bg-[#1A5276] text-white rounded-2xl font-bold hover:bg-[#154360] transition-all shadow-lg active:scale-95 group"
          >
            <RefreshCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
            Réessayer maintenant
          </button>
          
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/"
              className="flex items-center justify-center gap-2 py-3.5 bg-white text-[#1A5276] border-2 border-[#1A5276]/10 rounded-2xl font-semibold hover:bg-muted transition-all active:scale-95"
            >
              <Home size={18} />
              Accueil
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3.5 bg-white text-[#F39C12] border-2 border-[#F39C12]/10 rounded-2xl font-semibold hover:bg-[#F39C12]/5 transition-all active:scale-95"
            >
              <MessageCircle size={18} />
              Support
            </Link>
          </div>
        </div>
        
        <p className="text-[10px] text-muted-foreground pt-4 uppercase tracking-tighter opacity-40">
           Janice Groupe International Immobilier - Erreur Système
        </p>
      </motion.div>
    </div>
  )
}
