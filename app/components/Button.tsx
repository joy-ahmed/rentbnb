'use client'

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outLine?: boolean;
  small?: boolean;
  icon?: boolean;
}

const Button = ({ label, onClick, disabled, outLine, small, icon: Icon}: ButtonProps) => {
  return (
    <button onClick={onClick} disabled={disabled} className={` relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full ${outLine ? 'bg-white' : 'bg-blue-500' } ${outLine ? 'border-black' : 'border-blue-500'} ${ outLine ? 'text-black' : 'text-white'} ${small ? 'py-1' : 'py-3'} ${small ? 'text-sm' : 'text-md'} ${small ? 'font-light' : 'font-semibold'} ${small ? 'border-[1px]' : 'border-2'}`}>
      { Icon && (
        <Icon size={24} className="absolute left-4 top-3" />
      )}
      {label}
    </button>
  )
}

export default Button