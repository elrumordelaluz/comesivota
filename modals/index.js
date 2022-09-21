import Alert from './Alert'

export const modals = {
  alert: Alert,
}

export const globalStyles = {
  overlay: (base) => ({ ...base, zIndex: 100 }),
  contentOuter: (base) => ({
    ...base,
    width: '100%',
    maxWidth: '100%',
    zIndex: 120,
    backgroundColor: '#f7f7f7',
    height: '100%',
    borderRadius: 0,
    '@media (min-width: 768px)': {
      width: 600,
      borderRadius: '2em',
      height: 'unset',
    },
  }),
  contentInner: (base) => ({
    ...base,
    margin: 0,
    padding: '115px 30px',
    maxHeight: '97vh',
    '@supports (-webkit-touch-callout: none)': {
      maxHeight: '-webkit-fill-available',
    },
  }),
}
