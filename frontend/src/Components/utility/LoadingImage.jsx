import Loading from "./Loading";

export default function LoadingImage({ size, text }) {
  return (
    <div style={{
      height: size,
      width: size,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Loading type="inf" />
      {text &&
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '4px',
          color: '#00000060'
        }}>
          <p>{text}</p>
          <Loading type={'dot'} />
        </div>
      }
    </div>
  )
}
