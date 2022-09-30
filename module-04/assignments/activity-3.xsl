<?xml version="1.0" encoding="utf-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html style="font-family = calibri;">
            <body>
                <h1 style="color: grey;">Products</h1>
                    <ul>
                        <xsl:for-each select = "products/product">
                            <xsl:sort select ="productName"/>
                            <li>
                                <h3 style="display: block; margin-right: 10px; ">
                                    <xsl:value-of select="productName"/>
                                </h3>
                                <table border="0">
                                    <tr>
                                        <td style="font-style: italic;">Manufacturer:</td>
                                        <td><xsl:value-of select="manufacturer"/></td>
                                     </tr>
                                    <tr>
                                        <td style="font-style: italic;">Description:</td>
                                        <td><xsl:value-of select="description"/></td>
                                    </tr>
                                    <tr>
                                        <td style="font-style: italic;">Price:</td>
                                        <td>
                                            <xsl:for-each select="prices">
                                                <xsl:value-of select="."/>
                                            </xsl:for-each>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="font-style: italic;">Product Items:</td>
                                        <td><xsl:value-of select="productItems"/></td>
                                    </tr> 
                                </table>
                            </li>
                        </xsl:for-each>
                    </ul>
            </body>
        </html>
    </xsl:template>



</xsl:stylesheet>



