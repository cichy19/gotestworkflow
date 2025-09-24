package alpha

import (
	"testing"

	"gotest.tools/assert"
)

func TestUpper(t *testing.T) {

	observed := Upper("fOo")
	expected := "FOO"
	assert.Equal(t, expected, observed)

}
