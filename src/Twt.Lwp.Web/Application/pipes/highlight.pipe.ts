import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'highlight' })

///
/// Highlight Pipe
///
export class Highlight implements PipeTransform {
	transform(value: string, args: string[]): any {
		if (!value) return value;

		let 	regPattern = new RegExp('((@|#)[A-Za-z0-9-_]+)', 'g')
		return value.replace(regPattern, '<span class="highlight-text">$1</span>');
	}
}