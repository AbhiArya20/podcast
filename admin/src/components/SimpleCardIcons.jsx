const SimpleCardIcons = ({ color1, color2 }) => {
  return (
    <span>
      <svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='100%'>
          <stop offset='0%' style={{ stopColor: `${color1}`, stopOpacity: '1' }} />
          <stop offset='100%' style={{ stopColor: `${color2}`, stopOpacity: '1' }} />
        </linearGradient>
        <circle cx='50' cy='50' r='50' fill='url(#grad1)' />
        <rect x='30' y='25' width='25' height='50' fill='none' stroke='white' strokeWidth='2' />
        <line x1='35' y1='35' x2='50' y2='35' stroke='white' strokeWidth='2' />
        <line x1='35' y1='40' x2='50' y2='40' stroke='white' strokeWidth='2' />
        <line x1='35' y1='45' x2='50' y2='45' stroke='white' strokeWidth='2' />
        <line x1='35' y1='50' x2='50' y2='50' stroke='white' strokeWidth='2' />
        <line x1='35' y1='55' x2='50' y2='55' stroke='white' strokeWidth='2' />
        <line x1='35' y1='60' x2='50' y2='60' stroke='white' strokeWidth='2' />
        <rect x='40' y='70' width='10' height='5' fill='none' stroke='white' strokeWidth='2' />
        <polygon points='60,25 70,25 70,70 60,75' fill='none' stroke='white' strokeWidth='2' />
      </svg>
    </span>
  );
};

export default SimpleCardIcons;
