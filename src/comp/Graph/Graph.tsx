import React from 'react';


import DagreGraph from 'dagre-d3-react';

const Graph = () => {
    interface d3Node {
      id: string,
      label: string,
      clas?: string,
      labelType?: 'html' | 'svg' | 'string',
      config?: object
    }
    interface d3Link {
      source: any,
      target: any,
      class?: string,
      label?: string,
      config?: object
    }
    const nodes: d3Node[] = [
      {
        id: "1",
        label: "<h3>Node 1</h3>",
        labelType: "html"
      },
      {
        id: "2",
        label: "<h3>Node 2</h3>",
        labelType: "html",
        config: {
                style: 'fill: #afa'
            }
      }
    ]
    const options = {
      rankdir: 'LR',
      align: 'UL',
      ranker: 'tight-tree'
  }
    const nodeHash = {}
    const links: d3Link[] = [
      {
        source: '1',
        target: '2',
        label: 'TO',
        config: {
                arrowheadStyle: 'display: none',
                style: 'fill:none'
        }
      },
    ]
    return (
        <div>
            <DagreGraph
            nodes={nodes}
            links={links}
            fitBoundaries={false}
            height="500"
            width="480"
            shape="rect"
            className="course-graph mx-auto"
            onNodeClick={() => console.log("Node clicked")}
            />
        </div>
    )
}

export default Graph;