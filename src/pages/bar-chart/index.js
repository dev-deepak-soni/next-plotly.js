import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../../component/Bar'), {
  ssr: false
})

const index = () => {
  return (
    <div>
        <DynamicPlot/>
    </div>
  )
}

export default index

