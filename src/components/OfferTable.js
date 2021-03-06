import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import Table from 'react-bootstrap/lib/Table'
import {FormattedMessage} from 'react-intl'

import mapKeys from 'lodash/mapKeys'
import camelCase from 'lodash/camelCase'

import {OfferRow as Offer} from './operations/Offer'
import {withDataFetchingContainer} from './shared/DataFetchingContainer'
import {withPaging} from './shared/Paging'
import {withSpinner} from './shared/Spinner'

class OfferTable extends React.Component {
  componentDidMount() {
    if (this.props.records.length <= this.props.limit) {
      this.props.hidePagingFn()
    }
  }

  render() {
    const records = this.props.records
    if (records.length === 0) return <div>No Offers</div>
    return (
      <Table
        id="offer-table"
        className="table-striped table-hover table-condensed"
      >
        <thead>
          <tr>
            <th>
              <FormattedMessage id="seller" />
            </th>
            <th>
              <FormattedMessage id="sell" />
            </th>
            <th>
              <FormattedMessage id="buy" />
            </th>
            <th>
              <FormattedMessage id="amount" />
            </th>
            <th>
              <FormattedMessage id="price" />
            </th>
          </tr>
        </thead>
        <tbody>
          {records.map(offer => (
            <Offer
              key={offer.id}
              offerId={offer.id}
              amount={offer.amount}
              price={offer.price}
              seller={offer.seller}
              buyingAssetCode={offer.buying.asset_code}
              buyingAssetIssuer={offer.buying.asset_issuer}
              buyingAssetType={offer.buying.asset_type}
              sellingAssetCode={offer.selling.asset_code}
              sellingAssetIssuer={offer.selling.asset_issuer}
              sellingAssetType={offer.selling.asset_type}
            />
          ))}
        </tbody>
      </Table>
    )
  }
}

OfferTable.propTypes = {
  compact: PropTypes.bool,
  records: PropTypes.array.isRequired,
  server: PropTypes.object.isRequired,
}

const rspRecToPropsRec = record => {
  return mapKeys(record, (v, k) => camelCase(k))
}

const fetchRecords = ({account, limit, server}) => {
  const builder = server.offers('accounts', account)
  builder.limit(limit)
  builder.order('desc')
  return builder.call()
}

const callBuilder = props => props.server.offers()

const enhance = compose(
  withPaging(),
  withDataFetchingContainer(fetchRecords, rspRecToPropsRec, callBuilder),
  withSpinner()
)

export default enhance(OfferTable)
