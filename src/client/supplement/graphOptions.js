const options = {
  autoResize: true,
  layout: {
    hierarchical: {
      enabled: true,
      levelSeparation: 100,
      nodeSpacing: 150,
      treeSpacing: 40,
      blockShifting: true,
      edgeMinimization: true,
      parentCentralization: true,
      direction: 'UD',        // UD, DU, LR, RL
      sortMethod: 'directed'   // hubsize, directed
    }
  },
  interaction: {
    hover: true,
    keyboard: {
      enabled: true,
      speed: {
        x:10,
        y:10,
        zoom:0.01,
      },
      bindToWindow: true,
    },
  },
  physics: {
    enabled: true,
    repulsion: {
      nodeDistance: 200,
    },
    hierarchicalRepulsion: {
      centralGravity: 0.0,
      springLength: 100,
      springConstant: 0.01,
      nodeDistance: 80,
      damping: 0.09
    },
  },
  edges: {
    color: "#000000",
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.8
    },
  },
  width: '100%',
  height: '100%',
  nodes: {
    chosen: true,
    borderWidth: 0,
    color: {
      border: 'black',
      background: '#97C2FC',
      highlight: {
        border: '#2B7CE9',
        background: '#D2E5FF'
      },
      hover: {
        border: '#2B7CE9',
        background: '#D2E5FF'
      }
    },
  },
  groups: {
    master: {
      shape: 'circularImage',
      image: {
        selected: './_ionicons_svg_md-crop2.svg',
        unselected: './_ionicons_svg_md-crop2.svg',
      }
    },
    pods: {
      shape: 'circularImage',
      image: {
        selected: './_ionicons_svg_logo-codepen2.svg',
        unselected: './_ionicons_svg_logo-codepen2.svg'
      }
    },
    services: {
      shape: 'circularImage',
      image: {
        selected: './_ionicons_svg_md-wifi2.svg',
        unselected: './_ionicons_svg_md-wifi2.svg'
      }
    },
    ingress: {
      shape: 'circularImage',
      image: {
        selected: './_ionicons_svg_md-aperture2.svg',
        unselected: './_ionicons_svg_md-aperture2.svg'
      }
    },
  },
  
};

export default options;
