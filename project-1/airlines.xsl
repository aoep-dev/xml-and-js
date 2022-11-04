<?xml version="1.0" encoding="utf-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/"> 
        <html>
            <head>
				<title>Project 1</title>
			</head> 
            <body>
                <table border="1">
                    <caption>Airlines</caption>
                    <!-- Table header -->
                    <thead>
                        <tr bgcolor="#9acd32" border-width="2px">
                            <th rowspan="2">Name</th>
                            <th rowspan="2">Address</th>
                            <th colspan="4">Parks</th>
                            <th colspan="3">Routes</th>
                        </tr>
                        <tr bgcolor="yellow" border-width="2px">
                            <th>ID</th>
                            <th>Route Type</th>
                            <th>Manufacturer</th>
                            <th>Year</th>
                            <th>Vehicle</th>
                            <th>Departure</th>
                            <th>Destination</th>
                        </tr>
                    </thead>
                    <!-- Table body -->
                    <tbody>
                        <xsl:for-each select="airlines/carrier">
                            <tr>
                                <!-- name column -->
                                <td><xsl:value-of select="name"/></td>

                                <!-- address column -->
                                <td><xsl:value-of select='concat(address/street, ", ",
                                    address/city, ", ", address/region, ", ", address/country)'/></td>

                                <!-- parks group -->
                                <td>
                                    <table>
                                        <xsl:for-each select="parks/park">
                                            <tr>
                                                <td><xsl:value-of select="@id"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <xsl:for-each select="parks/park">
                                            <tr>
                                                <td><xsl:value-of select="@routeType"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <xsl:for-each select="parks/park">
                                            <tr>
                                                <td><xsl:value-of select="manufacturer"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <xsl:for-each select="parks/park">
                                            <tr>
                                                <td><xsl:value-of select="year"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <!-- routes group -->
                                <td>
                                    <table>
                                        <xsl:for-each select="routes/route">
                                            <tr>
                                                <td><xsl:value-of select="@vehicle"/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <xsl:for-each select="routes/route">
                                            <tr>
                                                <td><xsl:value-of select='concat(departure/airport, ", ",
                                                departure/city, ", ", departure/region, ", ", departure/country)'/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </td>
                                <td>
                                    <table>
                                        <xsl:for-each select="routes/route">
                                            <tr>
                                                <td><xsl:value-of select='concat(destination/airport, ", ",
                                                destination/city, ", ", destination/region, ", ", destination/country)'/></td>
                                            </tr>
                                        </xsl:for-each>
                                    </table>
                                </td>                                
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>