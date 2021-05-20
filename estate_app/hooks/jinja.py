import frappe
from bitcoin_value import currency




# METHODS
def property_in_btc(price):
    cur = currency("NGN").fetch()
    return f"BTC {float(price)/cur}"




def exp(num):
    return float(num)**2

#FILTER
def add(v1, v2):
    if(float(v1)+float(v2))%2 == 0:
        return int(v1)+int(v2)
    return float(v1)+float(v2)
