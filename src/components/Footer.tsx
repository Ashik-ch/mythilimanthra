import React from 'react'
import data from '../content.json';

export const Footer: React.FC = () => {
    return (
        <div>
            <div className="border-t border-neutral-800/80">
                <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <p className="text-lg font-semibold text-gold-300">Mythili Manthra</p>
                        <p className="text-neutral-400 mt-2">{data.footer.hours}</p>
                    </div>
                    <nav className="flex flex-col gap-2 text-neutral-300">
                        {data.footer.quickLinks.map((l) => (
                            <a key={l} href={`#${l.toLowerCase()}`} className="hover:text-gold-300 transition-colors">{l}</a>
                        ))}
                    </nav>
                    <div className="flex flex-col gap-2">
                        <a className="hover:text-gold-300 transition-colors" href={data.footer.socials.instagram}>Instagram</a>
                        <a className="hover:text-gold-300 transition-colors" href={data.footer.socials.facebook}>Facebook</a>
                        <a className="hover:text-gold-300 transition-colors" href={data.footer.socials.linkedin}>LinkedIn</a>
                    </div>
                    <div className="text-sm text-neutral-500 self-end">© {new Date().getFullYear()} Mythili Manthra</div>
                </div>
            </div>

        </div>
    )
}
