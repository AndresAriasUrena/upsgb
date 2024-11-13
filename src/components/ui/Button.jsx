export default function Button({ children, variant = 'primary', className = '', ...props }) {
    const baseStyles = 'inline-flex items-center justify-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'border-transparent text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500',
      secondary: 'border-transparent text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500',
      outline: 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-primary-500',
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }