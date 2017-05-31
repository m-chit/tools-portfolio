import {Component, Input} from '@angular/core';
import {ToolModel} from '../../../models/tool.model';

@Component({
    selector: 'app-tool',
    templateUrl: './tool.component.html',
    styleUrls: ['./tool.component.css']
})
export class ToolComponent {
    @Input('Tool') tool: ToolModel;
}
