<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>Catalog</title>
            </head>
            <body>
                <!-- Main title -->
                <h2>Catalog</h2>
                <ul>
                    <xsl:for-each select="catalog/product">
                            <article>
                                <xsl:for-each select="catalog_item">
                                    <li>
                                        <h3><xsl:value-of select="../@product_id"/></h3>
                                        <p><xsl:value-of select="../@description"/></p>
                                        <table border="1" column-width="25px">
                                            <thead>
                                                <tr bgcolor="#9acd32" border-width="2px">
                                                    <th>Item number</th>
                                                    <th>Price</th>
                                                    <th>Gender</th>
                                                    <th>Small</th>
                                                    <th>Medium</th>
                                                    <th>Large</th>
                                                    <th>Extra Large</th>
                                                </tr>
                                            </thead>
                                            <tbody valign="top">
                                                <tr>
                                                    <td valign="middle"><xsl:value-of select="item_number"/></td>
                                                    <td valign="middle"><xsl:value-of select="price"/></td>
                                                    <td valign="middle">
                                                        <xsl:if test='@gender="Men"'>M</xsl:if>
                                                        <xsl:if test='@gender="Women"'>F</xsl:if>
                                                    </td>
                                                    <td>
                                                        <table border="1" cellpadding="10">
                                                            <!-- If a product has no small size, no subtable is made -->
                                                            <xsl:if test='count(size[@description="Small"]) > 0'>
                                                                <tr>
                                                                    <th>Color</th>
                                                                    <th>Image</th>
                                                                </tr>
                                                                <xsl:for-each select='size[@description="Small"]/color_swatch'>
                                                                    <tr>
                                                                        <td><xsl:value-of select="." /></td>
                                                                        <td><xsl:value-of select='@image'/></td>
                                                                    </tr>
                                                                </xsl:for-each>
                                                            </xsl:if>
                                                            <xsl:else>
                                                                <tr>""</tr>
                                                            </xsl:else>                                                         
                                                        </table>
                                                    </td>
                                                    <td>
                                                        <table border="1" cellpadding="10">
                                                            <!-- If a product has no medium size, no subtable is made -->
                                                            <xsl:if test='count(size[@description="Medium"]) > 0'>
                                                                <tr>
                                                                    <th>Color</th>
                                                                    <th>Image</th>
                                                                </tr>
                                                                <xsl:for-each select='size[@description="Medium"]/color_swatch'>
                                                                    <tr>
                                                                        <td><xsl:value-of select="." /></td>
                                                                        <td><xsl:value-of select='@image'/></td>
                                                                    </tr>
                                                                </xsl:for-each>
                                                            </xsl:if>
                                                            <xsl:else>
                                                                <tr></tr>
                                                            </xsl:else>
                                                            
                                                        </table>
                                                    </td>
                                                    <td>
                                                        <table border="1" cellpadding="10">
                                                            <!-- If a product has no arge size, no subtable is made -->
                                                            <xsl:if test='count(size[@description="Large"]) > 0'>
                                                                <tr>
                                                                    <th>Color</th>
                                                                    <th>Image</th>
                                                                </tr>
                                                                <xsl:for-each select='size[@description="Large"]/color_swatch'>
                                                                    <tr>
                                                                        <td><xsl:value-of select="." /></td>
                                                                        <td><xsl:value-of select='@image'/></td>
                                                                    </tr>
                                                                </xsl:for-each>
                                                            </xsl:if>
                                                            <xsl:else>
                                                                <tr></tr>
                                                            </xsl:else>
                                                            
                                                        </table>
                                                    </td>
                                                    <td>
                                                        <table border="1" cellpadding="10">
                                                            <!-- If a product has no extra large size, no subtable is made -->
                                                            <xsl:if test='count(size[@description="Extra Large"]) > 0'>
                                                                <tr>
                                                                    <th>Color</th>
                                                                    <th>Image</th>
                                                                </tr>
                                                                <xsl:for-each select='size[@description="Extra Large"]/color_swatch'>
                                                                    <tr>
                                                                        <td><xsl:value-of select="." /></td>
                                                                        <td><xsl:value-of select='@image'/></td>
                                                                    </tr>
                                                                </xsl:for-each>
                                                            </xsl:if>
                                                            <xsl:else>
                                                                <tr></tr>
                                                            </xsl:else>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </li>
                                </xsl:for-each>
                            </article>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
