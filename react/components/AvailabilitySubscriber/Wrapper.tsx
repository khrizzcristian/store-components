import React, { useContext } from 'react'
import { ProductContext } from 'vtex.product-context'

import AvailabilitySubscriber from './index'

const isAvailable = (commertialOffer: any) =>
  Number.isNaN(+commertialOffer?.AvailableQuantity) ||
  commertialOffer?.AvailableQuantity > 0

const AvailabilitySubscriberWrapper = (props: any) => {
  const { selectedItem } = useContext(ProductContext) as any

  const commertialOffer = selectedItem?.sellers?.[0]?.commertialOffer

  const available =
    props.available != null ? props.available : isAvailable(commertialOffer)

  // Render component only if product is out of sales
  if (available) return null

  const skuId = props.skuId ?? selectedItem?.itemId

  return <AvailabilitySubscriber skuId={skuId} />
}

export default AvailabilitySubscriberWrapper
