import React from 'react'
import Grid from 'react-bootstrap/lib/Grid'
import Panel from 'react-bootstrap/lib/Panel'
import Row from 'react-bootstrap/lib/Row'
import Table from 'react-bootstrap/lib/Table'
import {FormattedMessage, injectIntl} from 'react-intl'
import PropTypes from 'prop-types'

import AccountLink from './shared/AccountLink'
import Logo from './shared/Logo'
import BackendResourceBadgeButton from './shared/BackendResourceBadgeButton'
import {titleWithJSONButton} from './shared/TitleWithJSONButton'

import directory from '../data/directory'
const {anchors} = directory

const METADATA_PATH =
  'https://raw.githubusercontent.com/irisli/stellarterm/master/directory/directory.json'

const tradeURL = (assetCode, issuerDomain) =>
  `https://stellarterm.com/#exchange/XLM-native/${assetCode}-${issuerDomain}`

// render list of asset codes, each code on a new line
const AssetCodeColumn = ({assets}) => (
  <span>{Object.keys(assets).map(code => <div key={code}>{code}</div>)}</span>
)

const IssuerColumn = ({assets}) => (
  <span>
    {Object.keys(assets).map(code => (
      <div key={code}>
        <AccountLink
          account={assets[code].substring(assets[code].indexOf('-') + 1)}
          hideKnown
        />
      </div>
    ))}
  </span>
)

const TradeColumn = ({assets, domain}) => (
  <span>
    {Object.keys(assets).map(code => (
      <div key={code}>
        <a href={tradeURL(code, domain)} target="_blank">
          Trade
        </a>
      </div>
    ))}
  </span>
)

const Anchor = ({assets, domain, displayName, logo, website}) => {
  const toml = `https://${domain}/.well-known/stellar.toml`
  return (
    <tr className="directoryRow">
      <td>
        <a href={website} target="_blank">
          <Logo name={domain} src={logo} />
        </a>
      </td>
      <td className="anchorLinkCol stellarToml">
        <div>{displayName}</div>
        <div>
          <a href={website} target="_blank">
            {website}
          </a>
        </div>
        <div>
          <BackendResourceBadgeButton label="server.toml" url={toml} />
        </div>
      </td>
      <td>
        <AssetCodeColumn assets={assets} />
      </td>
      <td>
        <IssuerColumn assets={assets} />
      </td>
      <td>
        <TradeColumn assets={assets} domain={domain} />
      </td>
    </tr>
  )
}

Anchor.propTypes = {
  assets: PropTypes.object.isRequired,
  domain: PropTypes.string.isRequired,
  logo: PropTypes.string,
  website: PropTypes.string.isRequired,
}

class Anchors extends React.Component {
  render() {
    if (!anchors) return null
    const {formatMessage} = this.props.intl
    const header = titleWithJSONButton(
      formatMessage({id: 'anchors'}),
      METADATA_PATH
    )
    return (
      <Grid>
        <Row>
          <Panel header={header}>
            <Table>
              <thead>
                <tr>
                  <th />
                  <th />
                  <th>
                    <FormattedMessage id="asset" />
                  </th>
                  <th>
                    <FormattedMessage id="issuer" />
                  </th>
                  <th>StellarTerm</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(anchors).map(domain => {
                  const anchor = anchors[domain]
                  return (
                    <Anchor
                      key={domain}
                      assets={anchor.assets}
                      domain={domain}
                      displayName={anchor.displayName}
                      logo={anchor.logo}
                      website={anchor.website}
                    />
                  )
                })}
              </tbody>
            </Table>
          </Panel>
        </Row>
      </Grid>
    )
  }
}

export default injectIntl(Anchors)
