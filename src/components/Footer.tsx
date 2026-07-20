import { resumeData } from '../data/resume'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#eee] py-4 text-center text-xs text-[#999]">
      <p>
        © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
      </p>
    </footer>
  )
}
