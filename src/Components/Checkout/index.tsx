import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputMask from 'react-input-mask'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import * as S from './styles'
import { Overlay } from '../Cart/styles'
import { usePurchaseMutation } from '../../services/api'
import { RootReducer } from '../../store'
import { closeCheckout, close, clear } from '../../store/reducers/cart'

const Checkout = () => {
  const dispatch = useDispatch()

  const { checkout, items } = useSelector((state: RootReducer) => state.cart)

  const backToCart = () => {
    dispatch(closeCheckout())
  }

  const closeCheckoutTab = () => {
    dispatch(closeCheckout())
    dispatch(close())
    dispatch(clear())
  }

  const [deliveryWindow, setDeliveryWindow] = useState(true)

  const [purchase, { isLoading, data, isSuccess }] = usePurchaseMutation()

  const checkInputHasError = (fieldName: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = isTouched && isInvalid

    return hasError
  }

  const form = useFormik({
    initialValues: {
      receiver: '',
      address: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      nameCard: '',
      numberCard: '',
      code: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(3, 'O nome precisa conter pelo menos cinco caracteres')
        .required('Este campo é obrigatório'),
      address: Yup.string()
        .min(
          6,
          'O endereço por extenso precisa conter pelo menos seis caracteres'
        )
        .required('Este campo é obrigatório'),
      city: Yup.string()
        .min(
          4,
          'O nome da cidade por extenso precisa conter pelo menos quatro caracteres'
        )
        .max(40)
        .required('Este campo é obrigatório'),
      zipCode: Yup.string()
        .min(
          9,
          'O código postal precisa estar completo com 8 caracteres inseridos'
        )
        .max(9)
        .required('Este campo é obrigatório'),
      number: Yup.string().min(1).max(6).required('Este campo é obrigatório'),
      complement: Yup.string(),
      nameCard: Yup.string()
        .min(5, 'O nome precisa conter pelo menos cinco caracteres')
        .required('Este campo é obrigatório'),
      numberCard: Yup.string()
        .min(19, 'O número do cartão deve ser passado por completo')
        .max(19)
        .required('Este campo é obrigatório'),
      code: Yup.string()
        .min(3, 'O código de segurança do cartão deve ser passado por completo')
        .max(3)
        .required('Este campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(
          2,
          'O mês de expiração deve ser passado por dois caracteres, exemplo: 02 para fevereiro ou 12 para dezembro'
        )
        .max(2)
        .required('Este campo é obrigatório'),
      expiresYear: Yup.string()
        .min(
          2,
          'O ano de expiração deve ser passado por dois caracteres, exemplo: 32 para se referir ao ano de 2032'
        )
        .max(2)
        .required('Este campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: values.address,
          city: values.city,
          number: Number(values.number),
          zipcode: values.zipCode,
          complement: values.complement
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.numberCard,
            code: Number(values.code),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id!,
          price: item.preco as number
        }))
      })
    }
  })

  if (checkout) {
    return (
      <S.CheckOutContainer>
        <Overlay />
        <S.Sidebar>
          {isSuccess && data ? (
            <div className="success">
              <h3>Pedido realizado - {data.orderId}</h3>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <S.BtnSuccess
                to={'/'}
                title="Clique para fechar esta aba"
                onClick={closeCheckoutTab}
              >
                Concluir
              </S.BtnSuccess>
            </div>
          ) : (
            <form onSubmit={form.handleSubmit}>
              {deliveryWindow ? (
                <div className="delivery">
                  <h3>Entrega</h3>
                  <S.InputGroup>
                    <label htmlFor="receiver">Quem irá receber</label>
                    <input
                      type="text"
                      id="receiver"
                      name="receiver"
                      value={form.values.receiver}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('receiver') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={form.values.address}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('address') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.values.city}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('city') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="zipCode">CEP</label>
                      <InputMask
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={form.values.zipCode}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('zipCode') ? 'error' : ''}
                        mask="99999-999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        type="number"
                        id="number"
                        name="number"
                        value={form.values.number}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('number') ? 'error' : ''}
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      type="text"
                      id="complement"
                      name="complement"
                      value={form.values.complement}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                  </S.InputGroup>
                  <S.ButtonsContainer>
                    <S.BtnCheckout
                      title="Prosseguir aos dados de pagamento"
                      onClick={() => {
                        setDeliveryWindow(false)
                      }}
                    >
                      Continuar com o pagamento
                    </S.BtnCheckout>
                    <S.BtnCheckout
                      title="Clique para voltar ao carrinho"
                      onClick={backToCart}
                    >
                      Voltar para o carrinho
                    </S.BtnCheckout>
                  </S.ButtonsContainer>
                </div>
              ) : (
                <div className="payment">
                  <h3>Pagamento - Valor a pagar R$ 190,90</h3>
                  <S.InputGroup>
                    <label htmlFor="nameCard">Nome no cartão</label>
                    <input
                      type="text"
                      id="nameCard"
                      name="nameCard"
                      value={form.values.nameCard}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      className={checkInputHasError('nameCard') ? 'error' : ''}
                    />
                  </S.InputGroup>
                  <S.Row className="widthInput">
                    <S.InputGroup>
                      <label htmlFor="numberCard">Número do cartão</label>
                      <InputMask
                        type="text"
                        id="numberCard"
                        name="numberCard"
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        value={form.values.numberCard}
                        className={
                          checkInputHasError('numberCard') ? 'error' : ''
                        }
                        mask="9999 9999 9999 9999"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="code">CVV</label>
                      <InputMask
                        type="text"
                        id="code"
                        name="code"
                        value={form.values.code}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={checkInputHasError('code') ? 'error' : ''}
                        mask="999"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.Row>
                    <S.InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <InputMask
                        type="text"
                        id="expiresMonth"
                        name="expiresMonth"
                        value={form.values.expiresMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresMonth') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </S.InputGroup>
                    <S.InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <InputMask
                        type="text"
                        id="expiresYear"
                        name="expiresYear"
                        value={form.values.expiresYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                        className={
                          checkInputHasError('expiresYear') ? 'error' : ''
                        }
                        mask="99"
                      />
                    </S.InputGroup>
                  </S.Row>
                  <S.ButtonsContainer>
                    <S.BtnCheckout
                      title="Clique para finalizar o pagamento"
                      onClick={() => form.handleSubmit}
                      disabled={isLoading}
                    >
                      {isLoading
                        ? 'Finalizando seu pedido...'
                        : 'Finalizar pagamento'}
                    </S.BtnCheckout>
                    <S.BtnCheckout
                      title="Voltar à edição de endereço"
                      onClick={() => {
                        setDeliveryWindow(true)
                      }}
                    >
                      Voltar para a edição de endereço
                    </S.BtnCheckout>
                  </S.ButtonsContainer>
                </div>
              )}
            </form>
          )}
        </S.Sidebar>
      </S.CheckOutContainer>
    )
  }

  return <div></div>
}

export default Checkout
