import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp'; 
import { AreaChart, Area, ResponsiveContainer,  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart,  } from 'recharts';
import { DataList, WidgetWrapper, DynamicSelect, SearchBox, DataTable, MapComponent, TitleBar, ItemListCard, FilterPanel, DataGrid, ItemCard, FormField, Label, Select, Input, DateRangePicker, DatePicker, Checkbox, ProfileImage, Popover, TrendChartComponent, ToggleFilter } from "uxp/components";
     
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
} 

const Air_quality_bannerWidget: React.FunctionComponent<IWidgetProps> = (props) => {  

    return (
        <WidgetWrapper className="widget-container">  
            
                 <div className="widget-cont">  
                    <div className="details">

                        <div className="detail-item detail-item1">
                        
                            <div className="content"> 
                                <div className="detail-item-cont"><h4> 9</h4> <em className="value">AQI</em></div>
                                <span className="status">Good</span>
                            </div>
                            <label className="label">US Air Quality Index</label>
                        </div>

                        <div className="detail-item detail-item2">
                            
                        
                            <div className="content">
                                <div className="detail-item-cont"><h4>24</h4> <em className="value">°C</em></div>
                                <span className="status">Temperature</span>
                            </div>

                            <div className="content"> 
                                <div className="detail-item-cont"><h4>57</h4><em className="value">%</em></div>
                                <span className="status">Humidity </span>
                            </div>
                            <label className="label">Thermal Comfort</label>
                        </div>

                        <div className="detail-item detail-item3"> 
                        
                            <div className="content"> 
                                <div className="detail-item-cont"><h4>2</h4><em className="value">µg/m³</em></div>
                                <span className="status">PM 2.5</span>
                            </div>

                            <div className="content"> 
                                <div className="detail-item-cont"><h4>474</h4> <em className="value">ppm</em></div>
                                <span className="status">Carbon Dioxide</span>
                            </div>

                            <div className="content"> 
                                <div className="detail-item-cont"><h4>68</h4><em className="value">µg/m³</em></div>
                                <span className="status">TVOC</span>
                            </div>
                            <label className="label">Air Quality</label>
                        </div>
    
                        <div className="logo-cont">
                            <span className="brand">One Bangkok</span>
                            <span className="tagline">The Heart of Bangkok</span>
                        </div> 
                    </div>   
             </div>   
        </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "air_quality_banner",
    widget: Air_quality_bannerWidget,
    configs: {
        layout: {
            // w: 30,
            // h: 12,
            // minH: 12,
            // minW: 12
            //   maxH: 12,
            //    maxW: 30
        }
    }
}); 