package main

import (
	"testing"

	"gotest.tools/assert"
)

func TestUpper(t *testing.T) {

	observed := Upper("foo")
	expected := "FOO"
	assert.Equal(t, expected, observed)

}
