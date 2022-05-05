import frappe
from erpnext.accounts.doctype.sales_invoice.sales_invoice import SalesInvoice
from pycoingecko import CoinGeckoAPI


class SalesInvoiceCustom(SalesInvoice):
    """
        Inherit core sales invoice and extend it.
    """

    def get_crypto_prices(self):
        """
            Get grand_total in BTC, ETH
        """
        cg = CoinGeckoAPI()
        prices = frappe._dict(cg.get_price(ids=['bitcoin', 'ethereum'], vs_currencies=self.currency))

        return {
            'bitcoin': float(self.grand_total/prices.bitcoin[self.currency.lower()]),
            'ethereum': float(self.grand_total/prices.ethereum[self.currency.lower()])
        }
