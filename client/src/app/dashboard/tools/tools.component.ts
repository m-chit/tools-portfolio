import {Component, Input} from '@angular/core';
import {ToolModel} from '../../models/tool.model';

@Component({
    selector: 'app-tools',
    templateUrl: './tools.component.html',
    styleUrls: ['./tools.component.css']
})
export class ToolsComponent {
    @Input('Tools') tools: ToolModel[] = [];
}
