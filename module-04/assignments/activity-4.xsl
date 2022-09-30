<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html style="font-family: Courier New;">
            <body style="width: 60%; margin: 0 auto;">
                <h3 style="text-align: center">Shippable Products</h3>
                <table border="1" style = "margin-left: auto; margin-right: auto;">
                    <tr>
                        <th>Product name</th>
                        <th>Manufacturer</th>
                        <th>Description</th>
                        <th>USD price</th>
                    </tr>
                    <xsl:for-each select = 'products/product[@shippable="true"]'>
                        <tr>
                            <td><xsl:value-of select="productName"/></td>
                            <td><xsl:value-of select="manufacturer"/></td>
                            <td><xsl:value-of select="description"/></td>
                            <td><xsl:value-of select="prices/price[1]"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <h3 style="text-align: center">Product: Manufacturer - ACME</h3>
                <table border="1" style = "margin-left: auto; margin-right: auto;">
                    <tr>
                        <th>Product name</th>
                        <th>Description</th>
                        <th>USD price</th>
                        <th>Euro price</th>
                    </tr>
                    <xsl:for-each select = 'products/product/manufacturer[@id="acme"]'>
                        <tr>
                            <td><xsl:value-of select='../productName'/></td>
                            <td><xsl:value-of select='../description'/></td>
                            <td><xsl:value-of select='../prices/price[1]'/></td>
                            <td><xsl:value-of select='../prices/price[3]'/></td>
                        </tr>
                    </xsl:for-each>
                </table>            
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>