import { StatelessComponent } from 'next';
import React, { ComponentClass } from 'react'

import Header from '../components/Header'
import Layout from '../components/Layout'
import TileDiscogs from '../components/Tile/variants/TileDiscogs'
import TileGithub from '../components/Tile/variants/TileGithub'
import TileLastFM from '../components/Tile/variants/TileLastFM'
import TileOverwatch from '../components/Tile/variants/TileOverwatch'
import TilePUBG from '../components/Tile/variants/TilePUBG'
import TileMetrics from '../components/Tile/variants/TileMetrics'

const TILES = [ TileLastFM, TileOverwatch, TilePUBG, TileDiscogs, TileGithub, TileMetrics ];

const Index: StatelessComponent<any> = () => (
    <Layout>
        <Header />
        <div className="Tiles">
            {TILES.map( (tile, index) => React.createElement(tile as ComponentClass<any>, { key: index }))}
        </div>
        <style jsx>{`
      .Tiles {
        margin: 2em 0;
        display: flex;
        flex-flow: row wrap;
      }`}
        </style>
    </Layout>
)

export default Index;