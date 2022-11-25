import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components'

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'

        }}>
          {/* <ProductCard product={product}>
            <ProductImage />
            <ProductTitle title="Hola"/>
            <ProductButtons increaseBy={function (value: number): void {
            throw new Error('Function not implemented.')
          } } counter={0} />
          </ProductCard>

        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Café'}/>
          <ProductCard.Buttons increaseBy={function (value: number): void {
            throw new Error('Function not implemented.')
          } } counter={0}/>
        </ProductCard> */}


        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={'Hola Mundo'}/>
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        
        </div>
    </div>
  )
}
