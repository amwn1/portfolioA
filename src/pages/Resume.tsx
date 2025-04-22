// src/pages/Resume.tsx
import React from 'react'

const ResumePage: React.FC = () => (
  <div className="w-full h-screen">
    <embed
      src="/resume.pdf"
      type="application/pdf"
      width="100%"
      height="100%"
    />
  </div>
)

export default ResumePage
